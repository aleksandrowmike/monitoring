import { createSelector } from "@ngrx/store";
import { IAppState } from "../state/app.state";
import { IFilterState } from "../state/filter.state";

const selectFilter = (state: IAppState) => state.filter;

export const slectFilterList = createSelector(
  selectFilter,
  (state: IFilterState) => state.filter,
);
