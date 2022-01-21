import { AppStateInterface } from './AppState';

export function AppReducer(state: AppStateInterface, action: { type: string; payload?: any }) {
    switch (action.type) {
        default:
            return state;
    }
}
