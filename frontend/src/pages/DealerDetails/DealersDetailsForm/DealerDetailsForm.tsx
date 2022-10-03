import { FC } from 'react';

import { DefaultInput } from 'components/Inputs';
import DatePicker from 'components/DatePicker';
import Select from 'components/Select';

import {
  DealerDetailsFormWrapper,
  FormFieldWrapper,
  SectionWrapper,
  SaveButton,
  StyledSubTitle,
  StyledTitle,
  DeleteButton,
  SectionContent,
  SectionTitle,
  StyledDivider
} from './styled';
import { DealerDetailsFormField, IDealerDetailsFormProps } from './types';
import {
  ACCREDITATION_SELECT_OPTIONS,
  DEALER_DETAILS_FORM_TEXT,
  RATING_SELECT_OPTIONS,
  STATES_SELECT_OPTIONS,
} from './constants';
import DealerPhoto from '../DealerPhoto';
import UploadLicense from '../UploadLicense';

const DealerDetailsForm: FC<IDealerDetailsFormProps> = ({ formik }) => {
  const { handleSubmit, getFieldProps } = formik;

  return (
    <DealerDetailsFormWrapper onSubmit={handleSubmit}>
      <SectionWrapper>
        <SectionTitle>
          <StyledTitle>
            {DEALER_DETAILS_FORM_TEXT.COMPANY_DETAILS_TITLE}
          </StyledTitle>
          <DeleteButton type='default'>
            {DEALER_DETAILS_FORM_TEXT.DELETE_BUTTON_TEXT}
          </DeleteButton>
        </SectionTitle>
        <SectionContent>
          <DealerPhoto />
          <FormFieldWrapper>
            <DefaultInput
              autoFocus
              labelText={DEALER_DETAILS_FORM_TEXT.COMPANY_NAME_LABEL}
              {...getFieldProps(DealerDetailsFormField.COMPANY_NAME)}
            />
          </FormFieldWrapper>
          <FormFieldWrapper>
            <DatePicker
              labelText={DEALER_DETAILS_FORM_TEXT.BUSINESS_STARTED_LABEL}
              {...getFieldProps(DealerDetailsFormField.BUSINESS_STARTED)}
            />
          </FormFieldWrapper>
          <FormFieldWrapper>
            <DefaultInput
              disabled
              labelText={DEALER_DETAILS_FORM_TEXT.YEARS_IN_BUSINESS_LABEL}
              {...getFieldProps(DealerDetailsFormField.YEARS_IN_BUSINESS)}
            />
          </FormFieldWrapper>
          <FormFieldWrapper>
            <Select
              labelText={DEALER_DETAILS_FORM_TEXT.HEADQUATERS_LABEL}
              selectConfig={STATES_SELECT_OPTIONS}
              placeholder={DEALER_DETAILS_FORM_TEXT.HEADQUATERS_PLACEHOLDER}
              options={STATES_SELECT_OPTIONS}
              {...getFieldProps(DealerDetailsFormField.HEADQUATERS)}
            />
          </FormFieldWrapper>
          <StyledSubTitle>
            {DEALER_DETAILS_FORM_TEXT.BETTER_BUSINESS_BUREAU_SUBTITLE}
          </StyledSubTitle>
          <FormFieldWrapper>
            <Select
              labelText={DEALER_DETAILS_FORM_TEXT.RATING_LABEL}
              placeholder={DEALER_DETAILS_FORM_TEXT.RATING_PLACEHOLDER}
              selectConfig={RATING_SELECT_OPTIONS}
              options={RATING_SELECT_OPTIONS}
              {...getFieldProps(DealerDetailsFormField.RATING)}
            />
          </FormFieldWrapper>
          <FormFieldWrapper>
            <Select
              labelText={DEALER_DETAILS_FORM_TEXT.ACCREDITATION_LABEL}
              placeholder={DEALER_DETAILS_FORM_TEXT.ACCREDITATION_PLACEHOLDER}
              selectConfig={ACCREDITATION_SELECT_OPTIONS}
              options={ACCREDITATION_SELECT_OPTIONS}
              {...getFieldProps(DealerDetailsFormField.ACCREDITATION)}
            />
          </FormFieldWrapper>
          <FormFieldWrapper>
            <DefaultInput
              labelText={DEALER_DETAILS_FORM_TEXT.URL_LABEL}
              {...getFieldProps(DealerDetailsFormField.URL)}
            />
          </FormFieldWrapper>
        </SectionContent>
      </SectionWrapper>
      <SectionWrapper>
        <StyledTitle>
          {DEALER_DETAILS_FORM_TEXT.CONTACT_DETAILS_TITLE}
        </StyledTitle>
        <SectionContent>
          <FormFieldWrapper>
            <DefaultInput
              labelText={DEALER_DETAILS_FORM_TEXT.EMAIL_LABEL}
              {...getFieldProps(DealerDetailsFormField.EMAIL)}
            />
          </FormFieldWrapper>
          <FormFieldWrapper>
            <DefaultInput
              labelText={DEALER_DETAILS_FORM_TEXT.PHONE_NUMBER_LABEL}
              placeholder={DEALER_DETAILS_FORM_TEXT.PHONE_NUMBER_PLACEHOLDER}
              {...getFieldProps(DealerDetailsFormField.PHONE_NUMBER)}
            />
          </FormFieldWrapper>
          <FormFieldWrapper>
            <DefaultInput
              labelText={DEALER_DETAILS_FORM_TEXT.ADDRESS_LABEL}
              {...getFieldProps(DealerDetailsFormField.ADDRESS)}
            />
          </FormFieldWrapper>
          <FormFieldWrapper>
            <DefaultInput
              labelText={DEALER_DETAILS_FORM_TEXT.WEBSITE_LABEL}
              {...getFieldProps(DealerDetailsFormField.WEBSITE)}
            />
          </FormFieldWrapper>
          <StyledSubTitle>
            {DEALER_DETAILS_FORM_TEXT.SOCIAL_SUBTITLE}
          </StyledSubTitle>
          <FormFieldWrapper>
            <DefaultInput
              labelText={DEALER_DETAILS_FORM_TEXT.FACEBOOK_LABEL}
              {...getFieldProps(DealerDetailsFormField.FACEBOOK)}
            />
          </FormFieldWrapper>
          <FormFieldWrapper>
            <DefaultInput
              labelText={DEALER_DETAILS_FORM_TEXT.TWITTER_LABEL}
              {...getFieldProps(DealerDetailsFormField.TWITTER)}
            />
          </FormFieldWrapper>
          <FormFieldWrapper>
            <DefaultInput
              labelText={DEALER_DETAILS_FORM_TEXT.YOUTUBE_LABEL}
              {...getFieldProps(DealerDetailsFormField.YOUTUBE)}
            />
          </FormFieldWrapper>
          <FormFieldWrapper>
            <DefaultInput
              labelText={DEALER_DETAILS_FORM_TEXT.INSTAGRAM_LABEL}
              {...getFieldProps(DealerDetailsFormField.INSTAGRAM)}
            />
          </FormFieldWrapper>
        </SectionContent>
      </SectionWrapper>
      <SectionWrapper>
        <StyledTitle>
          {DEALER_DETAILS_FORM_TEXT.LICENSING_DETAILS_TITLE}
        </StyledTitle>
        <SectionContent>
          <StyledSubTitle>
            {DEALER_DETAILS_FORM_TEXT.STATE_LICENSE_SUBTITLE}
          </StyledSubTitle>
          <FormFieldWrapper>
            <DefaultInput
              labelText={DEALER_DETAILS_FORM_TEXT.STATE_LICENSE_NUMBER_LABEL}
              {...getFieldProps(DealerDetailsFormField.STATE_LICENSE_NUMBER)}
            />
          </FormFieldWrapper>
          <FormFieldWrapper>
            <DefaultInput
              labelText={
                DEALER_DETAILS_FORM_TEXT.STATE_LICENSE_WEBSITE_URL_LABEL
              }
              {...getFieldProps(
                DealerDetailsFormField.STATE_LICENSE_WEBSITE_URL,
              )}
            />
          </FormFieldWrapper>
          <UploadLicense />
          <StyledDivider />
          <StyledSubTitle>
            {DEALER_DETAILS_FORM_TEXT.FINCEN_LICENSE_SUBTITLE}
          </StyledSubTitle>
          <FormFieldWrapper>
            <DefaultInput
              labelText={DEALER_DETAILS_FORM_TEXT.FINCEN_LICENSE_NUMBER_LABEL}
              {...getFieldProps(DealerDetailsFormField.FINCEN_LICENSE_NUMBER)}
            />
          </FormFieldWrapper>
          <FormFieldWrapper>
            <DefaultInput
              labelText={
                DEALER_DETAILS_FORM_TEXT.FINCEN_LICENSE_WEBSITE_URL_LABEL
              }
              {...getFieldProps(
                DealerDetailsFormField.FINCEN_LICENSE_WEBSITE_URL,
              )}
            />
          </FormFieldWrapper>
          <UploadLicense />
          <SaveButton htmlType='submit'>
            {DEALER_DETAILS_FORM_TEXT.SAVE_BUTTON_TEXT}
          </SaveButton>
        </SectionContent>
      </SectionWrapper>
    </DealerDetailsFormWrapper>
  );
};

export default DealerDetailsForm;
