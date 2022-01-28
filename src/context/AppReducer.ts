import { user } from '../mockData';
import { State, Meeting, User } from './AppState';

export type ActionType =
    | { type: 'SET_USER'; payload: User }
    | { type: 'ADD_MEETUP'; payload: Meeting }
    | { type: 'SET_STATE'; payload: any }
    | { type: 'ATTEND_MEETUP'; payload: string | undefined };

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

        case 'ATTEND_MEETUP':

            const isAttending = state.user.bookedMeetups.some((meetup: string ) => meetup === action.payload ) 

            return {
                ...state,
                user: {
                    ...user,
                    bookedMeetups: !isAttending 
                    ? [...state.user.bookedMeetups, action.payload] 
                    : state.user.bookedMeetups.filter((meetup: string ) => meetup !== action.payload ),
                }
            };

        default:
            return state;
    }
}
