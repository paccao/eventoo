import { AppStateInterface } from './AppState';

export const APP_STATE_ACTIONS = {
    TEST_COUNTER_INCREASE: 'TEST_COUNTER_INCREASE',
};

export function AppReducer(state: AppStateInterface, action: { type: string; payload?: any }) {
    switch (action.type) {
        case APP_STATE_ACTIONS.TEST_COUNTER_INCREASE:
            return {
                ...state,
                testCounter: state.testCounter + 1,
            };

        default:
            return state;
    }
}
