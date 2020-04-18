import { EFilterActions, FilterActions } from "../actions/filter.actions";
import { IFilterState, initialFilterState } from "../state/filter.state";

export function filterReducers(state: IFilterState = initialFilterState, action: FilterActions): IFilterState {
  switch (action.type) {
    case EFilterActions.GetFilterSuccess: {
      return {
        ...state,
        filter: action.payload
      };
    }
    case EFilterActions.ResetFilter: {
      return {
        ...state,
        filter: null
      };
    }
    default: {
      return state;
    }
  }
}
