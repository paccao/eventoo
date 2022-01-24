import { State, Meeting, User } from './AppState';
import { nanoid } from 'nanoid';

export type ActionType =
    | { type: 'TEST_COUNTER_INCREASE' }
    | { type: 'SET_MEETUPS'; payload: Meeting[] }
    | { type: 'SET_USER'; payload: User }
    | { type: 'TOGGLE_ROLE' }
    | { type: 'ADD_MEETUP'; payload: Meeting }
    | { type: 'SET_STATE'; payload: any };

export function AppReducer(state: State, action: ActionType) {
    switch (action.type) {
        case 'TOGGLE_ROLE':
            return {
                ...state,
                isAdmin: !state.isAdmin,
            };

        case 'SET_STATE':
            return {
                ...action.payload,
            };

        case 'TEST_COUNTER_INCREASE':
            return {
                ...state,
                isAdmin: state.isAdmin ? false : true,
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
