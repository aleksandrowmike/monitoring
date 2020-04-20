import { DepartmentsActions, EDepartmentsActions } from "../actions/departments.actions";
import { DepartmentState, initialDepartmentState } from "../state/departments.state";

export function departmentsReducers (state: DepartmentState = initialDepartmentState, action: DepartmentsActions): DepartmentState {
  switch (action.type) {
    case EDepartmentsActions.GetAllDepartmentsSuccess: {
      return {
        ...state,
        data: action.payload
      };
    }
    case EDepartmentsActions.GetDirectionsDepartmentSuccess: {
      return {
        ...state,
        directionSelected: action.payload
      };
    }
    case EDepartmentsActions.ResetDirectionsFaculties: {
      return {
        ...state,
      };
    }
    default: {
      return state;
    }
  }
}
