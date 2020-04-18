import { IFilter } from "../../models/filter.interface";

export interface IFilterState {
  filter: IFilter[];
}
export const initialFilterState: IFilterState = {
  filter: null
};
