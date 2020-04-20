import { createSelector } from "@ngrx/store";
import { IAppState } from "../state/app.state";
import { DepartmentState } from "../state/departments.state";

const selectDepartments = (state: IAppState) => state.departments;

export const selectFacultiesList = createSelector(
  selectDepartments,
  (state: DepartmentState) => state.data,
);

export const selectDepartmentsList = createSelector(
  selectDepartments,
  (state: DepartmentState) => state.data,
);

export const selectDirectionsFacultiesList = createSelector(
  selectDepartments,
  (state: DepartmentState) => state.directionSelected,
);
export const selectDirectionsDepartmentList = createSelector(
  selectDepartments,
  (state: DepartmentState) => state.directionSelected,
);
