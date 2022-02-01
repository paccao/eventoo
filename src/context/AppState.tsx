import React, { createContext, useReducer, Dispatch, useEffect } from 'react';
import { AppReducer, ActionType } from './AppReducer';
import { useStoreHook } from '../hooks/StoreHook';

import { meetups, user } from '../mockData';

import { Db } from '../db/Db';
const db = new Db();

export interface State {
    meetings: Meeting[] | [];
    user: User;
}

export interface Meeting {
    id: string;
    title: string;
    description: string;
    tag: string[];
    time: string;
    isOnline: boolean;
    location: string;
    image: string;
    timeStamp: number;
    comments: Comment[];
}

// type Role = 'admin' | 'guest';
export interface Comment {
    id: string;
    time: string;
    content: string;
    role: string;
}

interface ContextProps {
    state: State;
    dispatch: Dispatch<ActionType>;
}

export interface User {
    id: string;
    isAdmin: boolean;
    name: string;
    bookedMeetups: string[] | [];
}

const initialState: State = {
    meetings: meetups,
    user: user,
};

export const AppContext = createContext<ContextProps>({
    state: initialState,
    dispatch: () => null,
});

function AppState({ children }: React.PropsWithChildren<{}>) {
    const [state, dispatch] = useReducer(AppReducer, initialState);

    // custom hook to update state in local storage
    const { mutate } = useStoreHook();

    // import stored state from LocalStorage into active state context on refresh.
    useEffect(() => {
        if (!localStorage.getItem('state')) {
            return;
        } else {
            const dbState = db.getState();
            dispatch({ type: 'SET_STATE', payload: dbState });
        }
    }, []);

    //  On state change update local storage with current changes.

    useEffect(() => {
        mutate(state);
    }, [state, mutate]);

    return <AppContext.Provider value={{ state, dispatch }}>{children}</AppContext.Provider>;
}

export default AppState;
