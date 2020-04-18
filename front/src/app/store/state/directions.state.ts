import { IDirections } from "../../models/directions.interface";

export interface DirectionsState {
  directionSelected: IDirections;
}
export const initialDirectionsState: DirectionsState = {
  directionSelected: null
};
