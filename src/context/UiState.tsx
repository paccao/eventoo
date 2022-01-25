import React, { createContext, useReducer, Dispatch } from 'react';
import { UiReducer, ActionType } from './UiReducer';

export interface UiStateModel {
    isPassedMeetups: boolean;
    isAdmin: Boolean;
    showCreateMeetingModal: boolean;
}

interface ContextProps {
    state: UiStateModel;
    dispatch: Dispatch<ActionType>;
}

const initialState: UiStateModel = {
    isPassedMeetups: false,
    isAdmin: false,
    showCreateMeetingModal: false,
};

export const UiContext = createContext<ContextProps>({
    state: initialState,
    dispatch: () => null,
});

function UiState({ children }: React.PropsWithChildren<{}>) {
    const [state, dispatch] = useReducer(UiReducer, initialState);

    return <UiContext.Provider value={{ state, dispatch }}>{children}</UiContext.Provider>;
}

export default UiState;
