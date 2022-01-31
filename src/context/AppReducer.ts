import { user } from '../mockData';
import { State, Meeting, User, Comment } from './AppState';

export type ActionType =
    | { type: 'SET_USER'; payload: User }
    | { type: 'ADD_MEETUP'; payload: Meeting }
    | { type: 'UPDATE_MEETUP'; payload: Meeting }
    | { type: 'DELETE_MEETUP'; payload: Meeting }
    | { type: 'SET_STATE'; payload: any }
    | { type: 'ATTEND_MEETUP'; payload: string | undefined }
    | { type: 'ADD_COMMENT'; payload: { urlId: string | undefined; comment: Comment } };

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
        case 'UPDATE_MEETUP':
            const updatedMeetings = state.meetings.map((meeting) =>
                meeting.id === action.payload.id ? action.payload : meeting,
            );

            return {
                ...state,
                meetings: [...updatedMeetings],
            };

        case 'DELETE_MEETUP':
            return {
                ...state,
                meetings: [...state.meetings.filter((meeting) => meeting.id !== action.payload.id)],
            };

        case 'SET_USER':
            return {
                ...state,
                user: action.payload,
            };

        case 'ATTEND_MEETUP':
            const isAttending = state.user.bookedMeetups.some(
                (meetup: string) => meetup === action.payload,
            );

            return {
                ...state,
                user: {
                    ...user,
                    bookedMeetups: !isAttending
                        ? [...state.user.bookedMeetups, action.payload]
                        : state.user.bookedMeetups.filter(
                              (meetup: string) => meetup !== action.payload,
                          ),
                },
            };
        case 'ADD_COMMENT':
            return {
                ...state,
                meetings: [
                    ...state.meetings.map((meeting) => {
                        if (meeting.id === action.payload.urlId) {
                            meeting.comments = [...meeting.comments, action.payload.comment];
                        }
                        return meeting;
                    }),
                ],
            };

        default:
    }
}
