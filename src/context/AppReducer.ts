import { user } from '../mockData';
import { State, Meeting, User, Comment } from './AppState';

export type ActionType =
    | { type: 'SET_USER'; payload: User }
    | { type: 'ADD_MEETUP'; payload: Meeting }
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
            // if (!action.payload.urlId) return state;
            console.log('Hello from reducer! ', action.payload);

            const currentMeeting = state.meetings.filter(
                (meeting) => meeting.id === action.payload.urlId,
            );
            const updatedComments = [...currentMeeting[0].comments, action.payload.comment];
            currentMeeting[0].comments = updatedComments;
            // const updatedMeeting = { ...currentMeeting[0], comments: updatedComments };

            // const notUpdatedMeetings = state.meetings.map(
            //     (meeting) => (meeting.id === action.payload.urlId && currentMeeting[0]) || meeting,
            // );
            return {
                ...state,
            };

        default:
    }
}
