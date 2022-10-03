export interface ISignInProps {
  isPasswordUpdated?: boolean;
}

export interface ISignInLocation {
  state: { isPasswordUpdated?: boolean };
}
