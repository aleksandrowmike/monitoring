export interface IAuthState {
  token: string;
  isLogged: boolean;
  remember: boolean;
}
export const initialAuthState: IAuthState = {
  token: null,
  isLogged: false,
  remember: false
};
