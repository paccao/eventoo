import React, { createContext, useReducer, Dispatch, useEffect } from 'react';
import { AppReducer, ActionType } from './AppReducer';
import { useStoreHook } from '../hooks/StoreHook';

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
    isOnline: boolean;
    location: string;
    image: string;
    comments: Comment[];
}


type Role = 'admin' | 'guest';
export interface Comment {
    id: string;
    time: string;
    content: string;
    role: string;
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
    const { mutate } = useStoreHook()

     useEffect(() => {

        const dbState = db.getState()
        dispatch({ type: 'SET_STATE', payload: dbState })

    }, []) 


     useEffect(() => {
        try {
            mutate(state)
        } catch (error) {
            return
        }
 
    }, [ state ]) 



    return (
        <AppContext.Provider value={{ state, dispatch }}>
            { children }
         </AppContext.Provider>
    )
}

export default AppState;
