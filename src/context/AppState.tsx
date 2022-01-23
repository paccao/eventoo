import React, { createContext, useReducer, Dispatch, useEffect } from 'react';
import { AppReducer, ActionType } from './AppReducer';
import { meetups } from '../mockData'

import { Db } from '../db/Db';
const db = new Db()


export interface State {
    isAdmin: Boolean;
    meetings: Meeting[] | [];
    testCounter: number;
    user: User | {};
}


export interface Meeting {
    id: string;
    title: string;
    tag: string[];
    time: string;
    location: string;
    isOnline: boolean;
    image: string;
    comments: Comment[];
}


type Role = 'admin' | 'guest';
export interface Comment {
    id: string;
    time: string;
    content: string;
    role: any;
}


interface ContextProps {
    state: State
    dispatch: Dispatch<ActionType>
}


export interface User {
    id: string;
    isAdmin: boolean;
    name: string; 
    bookedMeetups: string[]
}


const initialState: State = {
    isAdmin: false,
    testCounter: 1,
    meetings: [],
    user: {},
};




export const AppContext = createContext<ContextProps>({ 
    
    state: initialState, dispatch: () => null 

});
 

function AppState({ children }: React.PropsWithChildren<{}>) {
    
    const [ state, dispatch ] = useReducer(AppReducer, initialState);

    
    useEffect(() => {
        const meetups = db.getMeetup()
        dispatch({ type: 'SET_MEETUPS', payload: meetups })
    }, [])


    return (
        <AppContext.Provider value={{ state, dispatch }}>
            { children }
         </AppContext.Provider>
    )
}

export default AppState;
