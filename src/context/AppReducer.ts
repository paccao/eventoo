import { State, Meeting, User } from './AppState';

export type ActionType =
    | { type: 'SET_USER'; payload: User }
    | { type: 'ADD_MEETUP'; payload: Meeting }
    | { type: 'SET_STATE'; payload: any };

export function AppReducer(state: State, action: ActionType) {
    switch (action.type) {
        case 'SET_STATE':
            return {
                ...action.payload,
            };

        case 'ADD_MEETUP':
            return {
                ...state,
                meetings: [...state.meetings, action.payload],
            };

        case 'SET_USER':
            return {
                ...state,
                user: action.payload,
            };

        default:
            return state;
    }
}
