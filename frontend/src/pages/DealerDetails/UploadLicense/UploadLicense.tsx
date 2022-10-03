import { message, Upload } from 'antd';
import type { UploadFile } from 'antd/es/upload/interface';
import type { UploadChangeParam } from 'antd/es/upload';

import {
  StyledButton,
  StyledList,
  StyledUploadIcon,
  UploadWrapper,
} from './styled';
import {
  UploadStatuses,
  UPLOAD_BUTTON_TEXT,
  UPLOAD_FILE_HINTS,
} from '../constants';

const props = {
  name: 'file',
  action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
  headers: {
    authorization: 'authorization-text',
  },

  onChange(info: UploadChangeParam<UploadFile>) {
    if (info.file.status !== UploadStatuses.UPLOADING) {
      console.log(info.file, info.fileList);
    }

    if (info.file.status === UploadStatuses.DONE) {
      message.success(`${info.file.name} file uploaded successfully`);
    } else if (info.file.status === UploadStatuses.ERROR) {
      message.error(`${info.file.name} file upload failed.`);
    }
  },
};

const UploadLicense = () => (
  <UploadWrapper>
    <Upload {...props}>
      <StyledButton icon={<StyledUploadIcon />}>
        {UPLOAD_BUTTON_TEXT}
      </StyledButton>
    </Upload>
    <StyledList>
      {UPLOAD_FILE_HINTS.map((text, index) => (
        <li key={index}>{text}</li>
      ))}
    </StyledList>
  </UploadWrapper>
);

export default UploadLicense;
