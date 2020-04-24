import { EStudentActions, StudentActions } from "../actions/student.actions";
import { initialStudentState, IStudentState } from "../state/student.state";

export function studentReducers (state: IStudentState = initialStudentState, action: StudentActions): IStudentState {
  switch (action.type) {
    case EStudentActions.GetStudentsByDepartmentSuccess: {
      return {
        ...state,
        response: action.payload
      };
    }
    default: {
      return state;
    }
  }
}
