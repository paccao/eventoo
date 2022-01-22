import { State } from './AppState';

export type ActionType =
  | { type: 'TEST_COUNTER_INCREASE' }




export function AppReducer(state: State, action: ActionType) {
    switch (action.type) {
        case 'TEST_COUNTER_INCREASE':
            return {
                ...state,
                testCounter: state.testCounter + 1,
            };

        default:
            return state;
    }
}
