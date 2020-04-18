import { EFacultiesActions, FacultiesActions } from "../actions/faculties.actions";
import { FacultiesState, initialFacultiesState } from "../state/faculties.state";

export function facultiesReducers (state: FacultiesState = initialFacultiesState, action: FacultiesActions): FacultiesState {
  switch (action.type) {
    case EFacultiesActions.GetAllFacultiesSuccess: {
      return {
        ...state,
        faculties: action.payload
      };
    }
    case EFacultiesActions.GetDirectionsFacultiesSuccess: {
      return {
        ...state,
        directionSelected: action.payload
      };
    }
    case EFacultiesActions.ResetDirectionsFaculties: {
      return {
        ...state,
        directionSelected: null
      };
    }
    default: {
      return state;
    }
  }
}
