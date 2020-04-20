import { Department } from "../../models/department";
import { Direction } from "../../models/direction";
import { IDirections } from "../../models/directions.interface";

export interface DepartmentState {
  data: Department[];
  directionSelected: Direction[];
  count: number;
}
export const initialDepartmentState: DepartmentState = {
  data: null,
  directionSelected: null,
  count: null
};
