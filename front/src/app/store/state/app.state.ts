import { RouterReducerState } from "@ngrx/router-store";
import { IAuthState, initialAuthState } from "./auth.state";
import { FacultiesState, initialFacultiesState } from "./faculties.state";
import { IFilterState, initialFilterState } from "./filter.state";
import { IModeState, initialModeState } from "./mode.state";
import { initialStatisticState, IStatisticState } from "./statistic.state";
import { initialStudentState, IStudentState } from "./student.state";


export interface IAppState {
  router?: RouterReducerState;
  students: IStudentState;
  faculties: FacultiesState;
  filter: IFilterState;
  mode: IModeState;
  auth: IAuthState;
  statistic: IStatisticState;
}

export const initialAppState: IAppState = {
  students: initialStudentState,
  faculties: initialFacultiesState,
  filter: initialFilterState,
  mode: initialModeState,
  auth: initialAuthState,
  statistic: initialStatisticState
};

export function getInitialState(): IAppState {
  return initialAppState;
}
