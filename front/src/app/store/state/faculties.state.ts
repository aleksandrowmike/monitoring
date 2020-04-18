import { IDirections } from "../../models/directions.interface";
import { IFaculties } from "../../models/faculties.interface";

export interface FacultiesState {
  faculties: IFaculties[];
  directionSelected: IDirections[];
  count: number;
}
export const initialFacultiesState: FacultiesState = {
  faculties: null,
  directionSelected: null,
  count: null
};
