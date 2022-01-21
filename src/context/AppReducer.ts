import { AppStateInterface } from './AppState';

export const APP_STATE_ACTIONS = {
    TOGGLE_ROLE: 'TOGGLE_ROLE',
};

export function AppReducer(state: AppStateInterface, action: { type: string; payload?: any }) {
    switch (action.type) {
        case APP_STATE_ACTIONS.TOGGLE_ROLE:
            return {
                ...state,
                isAdmin: state.isAdmin ? false : true,
            };

        default:
            return state;
    }
}
