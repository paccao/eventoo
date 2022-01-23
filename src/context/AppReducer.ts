import { State, Meeting, User } from './AppState';

export type ActionType =
  | { type: 'TEST_COUNTER_INCREASE' }
  | { type: 'SET_MEETUPS', payload: Meeting[] }
  | { type: 'SET_USER',  payload: User }


export function AppReducer(state: State, action: ActionType) {
    switch (action.type) {
        case 'TEST_COUNTER_INCREASE':
            return {
                ...state,
                testCounter: state.testCounter + 1,
            };
        case 'SET_MEETUPS':            
            return {
                ...state,
                meetings: action.payload,
            };
        case 'SET_USER':
            return {
                ...state,
                user: action.payload
            };

        default:
            return state;
    }
}
