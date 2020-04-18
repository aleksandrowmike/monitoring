import { createSelector } from "@ngrx/store";
import { IAppState } from "../state/app.state";
import { IStatisticState } from "../state/statistic.state";

const selectStatistic = (state: IAppState) => state.statistic;
export const selectStatisticFaculty = createSelector(
  selectStatistic,
  (state: IStatisticState) => state.statistic,
);
export const selectStatisticFacultySelected = createSelector(
  selectStatistic,
  (state: IStatisticState) => state.selected,
);
