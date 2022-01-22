import React, { createContext, useReducer, Dispatch } from 'react';
import { AppReducer, ActionType } from './AppReducer';


export interface State {
    isAdmin: Boolean;
    meetings: Meeting[];
    testCounter: number;
}


export interface Meeting {
    id: string;
    title: string;
    tag: string[];
    time: string;
    location: string;
    image: string;
    comments: Comment[];
}


type Role = 'admin' | 'guest';
export interface Comment {
    id: string;
    time: string;
    content: string;
    role: Role;
}


interface ContextProps {
    state: State
    dispatch: Dispatch<ActionType>
}


const initialState: State = {
    isAdmin: false,
    testCounter: 1,
    meetings: [
        {
            id: '0',
            title: 'lördag på landet',
            tag: ['outdoors'],
            time: 'Lördag 20 Jan 18.00',
            location: 'Göteborg',
            image: 'https://images.unsplash.com/photo-1618264366449-c8a2a1b799ba?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
            comments: [
                {
                    id: '0',
                    time: '2020-05-25',
                    content: 'First comment!',
                    role: 'admin',
                },
            ],
        },
    ],
};




export const AppContext = createContext<ContextProps>({ 
    
    state: initialState, dispatch: () => null 

});
 

function AppState({ children }: React.PropsWithChildren<{}>) {
    
    const [ state, dispatch ] = useReducer(AppReducer, initialState);

    return (
        <AppContext.Provider value={{ state, dispatch }}>
            { children }
         </AppContext.Provider>
    )
}

export default AppState;
