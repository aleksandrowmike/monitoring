import { IStatistic } from "../../models/statistic.interface";

export interface IStatisticState {
  statistic: IStatistic[];
  selected: IStatistic;
}
export const initialStatisticState: IStatisticState = {
  statistic: [],
  selected: null
};
