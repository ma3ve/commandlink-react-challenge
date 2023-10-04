import { Action } from "redux";
import { EFormAction, FormState } from "../types";

export const initialState: FormState = {
  firstName: "",
  lastName: "",
  email: "",
  address1: "",
  city: "",
  state: "",
  zip: "",
  phone: "",
  jobTitle: "",
  reason: "",
};

const formReducer = (
  state = initialState,
  action: Action<EFormAction> & { payload?: Partial<FormState> }
): FormState => {
  switch (action.type) {
    case EFormAction.UPDATE: {
      console.log({ state, action });
      return {
        ...state,
        ...action.payload,
      };
    }

    case EFormAction.RESET:
      return {
        ...initialState,
      };
    default:
      return state;
  }
};

export default formReducer;
