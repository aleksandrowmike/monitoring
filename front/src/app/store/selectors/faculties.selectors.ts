import { createSelector } from "@ngrx/store";
import { IAppState } from "../state/app.state";
import { FacultiesState } from "../state/faculties.state";

const selectFaculties = (state: IAppState) => state.faculties;

export const selectFacultiesList = createSelector(
  selectFaculties,
  (state: FacultiesState) => state.faculties,
);
export const selectDirectionsFacultiesList = createSelector(
  selectFaculties,
  (state: FacultiesState) => state.directionSelected,
);
