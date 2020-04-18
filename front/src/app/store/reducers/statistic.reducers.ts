import { EStatisticActions, StatisticActions } from "../actions/statistic.actions";
import { initialStatisticState, IStatisticState } from "../state/statistic.state";

export function statisticReducers(state: IStatisticState = initialStatisticState, action: StatisticActions): IStatisticState {
  switch (action.type) {
    case EStatisticActions.GetStatisticFacultySuccess: {
      return {
        ...state,
        statistic: state.statistic.concat([action.payload.statistic])
    };
    }
    case EStatisticActions.GetSelectedStatisticFacultySuccess: {
      return {
        ...state,
        selected: action.payload.statistic
      };
    }
    case EStatisticActions.ResetStatisticFaculty: {
      return {
        ...state,
        statistic: []
      };
    }
    default: {
      return state;
    }
  }
}
