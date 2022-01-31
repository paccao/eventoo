import { UiStateModel } from './UiState';

export type ActionType =
    | { type: 'TOGGLE_ROLE' }
    | { type: 'SET_IS_PASSED_MEETUPS' }
    | { type: 'TOGGLE_CREATE_MEETING_MODAL' }
    | { type: 'TOGGLE_SHOW_EDIT_DELETE_MEETING_MODAL' }
    | { type: 'SET_SEARCH_STRING', payload: string };

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
        case 'TOGGLE_SHOW_EDIT_DELETE_MEETING_MODAL':
            return {
                ...state,
                showEditDeleteModal: !state.showEditDeleteModal,
            };
        case 'SET_SEARCH_STRING':
            return {
                ...state,
                searchString: action.payload,
            };

        default:
            return state;
    }
}
