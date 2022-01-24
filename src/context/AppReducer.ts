import { State, Meeting, User } from './AppState';

export type ActionType =
    | { type: 'TEST_COUNTER_INCREASE' }
    | { type: 'SET_MEETUPS'; payload: Meeting[] }
    | { type: 'SET_USER'; payload: User }
    | { type: 'TOGGLE_ROLE' }
    | { type: 'ADD_MEETUP'; payload: Meeting }
    | { type: 'SET_STATE'; payload: any }
    | { type: 'SET_IS_PASSED_MEETUPS' }
    | { type: 'TOGGLE_CREATE_MEETING_MODAL' };

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
            
        case 'SET_IS_PASSED_MEETUPS':
            return {
                ...state,
                isPassedMeetups: !state.isPassedMeetups,
            };   
        case 'TOGGLE_CREATE_MEETING_MODAL':
            return {
                ...state,
                showCreateMeetingModal: !state.showCreateMeetingModal,
            };

        default:
            return state;
    }
}
