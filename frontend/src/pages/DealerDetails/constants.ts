export const NAVIGATION_TITLE = {
  companyDetails: 'Company Details',
  contactDetails: 'Contact Details',
  licensingDetails: 'Licensing Details',
};

export const NAVIGATION_MENU_ITEMS = [
  {
    key: NAVIGATION_TITLE.companyDetails,
    label: NAVIGATION_TITLE.companyDetails,
  },
  {
    key: NAVIGATION_TITLE.contactDetails,
    label: NAVIGATION_TITLE.contactDetails,
  },
  {
    key: NAVIGATION_TITLE.licensingDetails,
    label: NAVIGATION_TITLE.licensingDetails,
  },
];

export enum UploadStatuses {
  DONE = 'done',
  UPLOADING = 'uploading',
  ERROR = 'error',
}

export const UPLOAD_BUTTON_TEXT = 'Upload';
export const UPLOAD_NAME = 'avatar';
export const UPLOAD_LIST_TYPE = 'picture-card';

export const SLASH = 'slash';

export const UPLOAD_PHOTO_HINTS = [
  'Maximum size: 800 KB',
  'Allowed format: svg, jpg(jpeg), png',
  'Aspect ratio is 1:1',
];

export const UPLOAD_FILE_HINTS = [
  'Maximum size: 128 MB',
  'Allowed format: pdf, jpg, jpeg, png',
  'One file only',
];
