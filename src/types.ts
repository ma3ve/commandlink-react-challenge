export interface FormState {
  firstName: string;
  lastName: string;
  email: string;
  address1: string;
  city: string;
  state: string;
  zip: string;
  phone: string;
  jobTitle: string;
  reason: string;
}

export enum EFormAction {
  UPDATE,
  RESET,
}
