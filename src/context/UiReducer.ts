import { UiStateModel } from './UiState';

export type ActionType =
    | { type: 'TOGGLE_ROLE' }
    | { type: 'SET_IS_PASSED_MEETUPS' }
    | { type: 'TOGGLE_CREATE_MEETING_MODAL' };

export function UiReducer(state: UiStateModel, action: ActionType) {
    switch (action.type) {
        case 'TOGGLE_ROLE':
            return {
                ...state,
                isAdmin: !state.isAdmin,
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
