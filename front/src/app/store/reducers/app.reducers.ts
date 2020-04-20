import { Action, ActionReducer, ActionReducerMap, MetaReducer } from "@ngrx/store";
import { localStorageSync } from "ngrx-store-localstorage";
import { IAppState } from "../state/app.state";
import { appModeReducer } from "./app-mode.reducers";
import { authReducers } from "./auth.reducers";
import { departmentsReducers } from "./departments.reducers";
import { filterReducers } from "./filter.reducers";
import { statisticReducers } from "./statistic.reducers";
import { studentReducers } from "./student.reducers";


export const appReducers: ActionReducerMap<IAppState, Action> = {
  students: studentReducers,
  mode: appModeReducer,
  departments: departmentsReducers,
  filter: filterReducers,
  auth: authReducers,
  statistic: statisticReducers
};
export function localStorageSyncReducer(reducer: ActionReducer<Action>): ActionReducer<Action> {
  return localStorageSync({keys: ["students", "mode", "auth" , "departments", "filter", "statistic"], rehydrate: true})(reducer);
}
export const metaReducers: Array<MetaReducer<unknown, Action>> = [localStorageSyncReducer];
