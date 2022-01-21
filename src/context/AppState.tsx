import React, { createContext, useReducer } from 'react';
import { AppReducer } from './AppReducer';

export interface AppStateInterface {
    isAdmin: Boolean;
    meetings: Meeting[];
    testCounter: number;
}
interface Meeting {
    title: string;
    tag: string[];
    time: string;
    location: string;
    image: string;
    comments: Comment[];
}

type Role = 'admin' | 'guest';

interface Comment {
    time: string;
    content: string;
    role: Role;
}

// export const AppContext = createContext<AppStateInterface | null>(null);

const initialState: AppStateInterface = {
    isAdmin: false,
    testCounter: 1,
    meetings: [
        {
            title: 'lördag på landet',
            tag: ['outdoors'],
            time: 'Lördag 20 Jan 18.00',
            location: 'Göteborg',
            image: 'http://example.se',
            comments: [
                {
                    time: '2020-05-25',
                    content: 'First comment!',
                    role: 'admin',
                },
            ],
        },
    ],
};
export const AppContext = createContext<any>(initialState);

function AppState({ children }: React.PropsWithChildren<{}>) {
    const [state, dispatch] = useReducer(AppReducer, initialState);

    return <AppContext.Provider value={{ state, dispatch }}>{children}</AppContext.Provider>;
}

export default AppState;
