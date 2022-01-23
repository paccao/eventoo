import { State, Meeting, User } from './AppState';


export type ActionType =
  | { type: 'TEST_COUNTER_INCREASE' }
  | { type: 'SET_MEETUPS', payload: Meeting[] }
  | { type: 'SET_USER',  payload: User }
  | { type: 'TOGGLE_ROLE'}


export function AppReducer(state: State, action: ActionType) {
    switch (action.type) {
        case 'TOGGLE_ROLE':
            return {
                ...state,
                isAdmin: state.isAdmin ? false : true,
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
