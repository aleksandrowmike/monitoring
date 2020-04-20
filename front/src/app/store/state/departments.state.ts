import { Department } from "../../models/department";
import { IDirections } from "../../models/directions.interface";

export interface DepartmentState {
  data: Department[];
  directionSelected: IDirections[];
  count: number;
}
export const initialDepartmentState: DepartmentState = {
  data: null,
  directionSelected: null,
  count: null
};
