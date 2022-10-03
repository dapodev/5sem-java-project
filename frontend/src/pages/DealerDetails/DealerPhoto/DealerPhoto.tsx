import { FC, useState } from 'react';
import { Upload, Modal } from 'antd';
import type { RcFile, UploadFile, UploadProps } from 'antd/es/upload/interface';
import type { UploadChangeParam } from 'antd/es/upload';
import { LoadingOutlined, PlusOutlined } from '@ant-design/icons';

import { EMPTY_STRING } from 'config/constants';

import { StyledImg, StyledList, UploadButton, UploadWrapper } from './styled';
import {
  UploadStatuses,
  UPLOAD_BUTTON_TEXT,
  UPLOAD_LIST_TYPE,
  UPLOAD_NAME,
  SLASH,
  UPLOAD_PHOTO_HINTS,
} from '../constants';

const getUrl = (img: RcFile, callback: (url: string) => void) => {
  const reader = new FileReader();
  reader.addEventListener('load', () => callback(reader.result as string));
  reader.readAsDataURL(img);
};

const getImagePreview = (file: RcFile): Promise<string> =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result as string);
    reader.onerror = (error) => reject(error);
  });

const DealerDetailsFormContainer: FC = () => {
  const [isLoading, setLoading] = useState(false);
  const [imageUrl, setImageUrl] = useState<string>();
  const [isPreviewOpen, setPreviewOpen] = useState(false);
  const [previewImage, setPreviewImage] = useState(EMPTY_STRING);
  const [previewTitle, setPreviewTitle] = useState(EMPTY_STRING);

  const handleChange: UploadProps['onChange'] = (
    info: UploadChangeParam<UploadFile>,
  ) => {
    if (info.file.status === UploadStatuses.UPLOADING) {
      setLoading(true);
      return;
    }

    if (info.file.status === UploadStatuses.DONE) {
      getUrl(info.file.originFileObj as RcFile, (url) => {
        setLoading(false);
        setImageUrl(url);
      });
    }
  };

  const handlePreview = async (file: UploadFile) => {
    if (!file.url && !file.preview) {
      file.preview = await getImagePreview(file.originFileObj as RcFile);
    }

    setPreviewImage(file.url || (file.preview as string));
    setPreviewOpen(true);

    const previewFileName =
      file.name || file.url?.substring(file.url.lastIndexOf(SLASH) + 1);

    if (previewFileName) {
      setPreviewTitle(previewFileName);
    }
  };

  const handleCancel = () => setPreviewOpen(false);

  return (
    <>
      <UploadWrapper>
        <Upload
          name={UPLOAD_NAME}
          listType={UPLOAD_LIST_TYPE}
          beforeUpload={() => false}
          onChange={handleChange}
          onPreview={handlePreview}
        >
          {imageUrl ? (
            <StyledImg src={imageUrl} />
          ) : (
            <div>
              {isLoading ? <LoadingOutlined /> : <PlusOutlined />}
              <UploadButton>{UPLOAD_BUTTON_TEXT}</UploadButton>
            </div>
          )}
        </Upload>
        <StyledList>
          {UPLOAD_PHOTO_HINTS.map((text, index) => (
            <li key={index}>{text}</li>
          ))}
        </StyledList>
      </UploadWrapper>
      <Modal
        visible={isPreviewOpen}
        title={previewTitle}
        footer={null}
        onCancel={handleCancel}
      >
        <StyledImg src={previewImage} />
      </Modal>
    </>
  );
};

export default DealerDetailsFormContainer;
