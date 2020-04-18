import { createSelector } from "@ngrx/store";
import { IAppState } from "../state/app.state";

export const tokenAuth = (state: IAppState) => state;

export const selectTokenAuth = createSelector(
  tokenAuth,
  (state: IAppState) => state.auth.token,
);

export const getLoggedUser = createSelector(
  tokenAuth,
  (state: IAppState) => state.auth.isLogged,
);

export const getRemember = createSelector(
  tokenAuth,
  (state: IAppState) => state.auth.remember,
);

