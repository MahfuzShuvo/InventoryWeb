export enum RecordStatus {
  Active = 1,
  Inactive = 2,
  Deleted = 3,
}

export enum ResponseStatus {
  success = 200,
  internalServerError = 500,
  fail = 404,
  warning = 400,
  info = 300,
  unAuthorize = 401,
}

export enum DataType {
  Image = 1,
  Text = 2,
  Stream = 3,
  Video = 4,
}

export enum UserRole {
  SuperAdmin = 1,
  CompanyAdmin = 2,
  Agent = 3,
  Participant = 4,
}

export enum CommonAction {
  Active = 1,
  Inactive = 2,
  Remove = 3,
  View = 4,
  Edit = 5,
}

export enum CallStatus {
  OPEN = 1,
  PENDING = 2,
  WRAP = 3,
  COVERED_NOT_CALLED = 4,
  COVERED_AND_CALLED = 5,
  WRAP_TIME_CHANGE = 6,
  CANCELLED_BY_DISPATCH = 7,
  CANCELLED_BY_PATIENT = 8,
}

export enum CallSortBy {
  PATIENT_NAME = 1,
  PHONE_NUMBER = 2,
  TRIP_TIME = 3,
  LOCATION = 4,
  ADDRESS = 5,
  M_F_C = 6,
  COVERED_BY = 7,
  PREFERRED_BY = 8,
  NOTE = 9,
}

export enum NotificationCode {
  NewCall = 1,
  EditCall = 2,
  NewAcceptCallRequest = 3,
}

export let monthList = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'Jun',
  'Jul',
  'Aug',
  'Sep',
  'Oct',
  'Nov',
  'Dec',
];

export const NO_OF_AUTO_COMPLETE_DATA = 100;
export const NO_OF_ROW_DATA = 20;
