import { State, Meeting, User } from './AppState';
import { Db } from '../db/Db';
import { nanoid } from 'nanoid';

const db = new Db()

export type ActionType =
    | { type: 'TEST_COUNTER_INCREASE' }
    | { type: 'ADD_MEETUP', payload: Meeting }
    | { type: 'SET_USER', payload: User }
    | { type: 'SET_STATE', payload: any }


export function AppReducer(state: State, action: ActionType) {
    switch (action.type) {


        case 'SET_STATE':
            return {
                ...action.payload,
            };


        case 'TEST_COUNTER_INCREASE':
            return {
                ...state,
                testCounter: state.testCounter + 1,
            };


        case 'ADD_MEETUP':

            return {
                ...state,
                meetings: [...state.meetings, action.payload],
            };


        case 'SET_USER':
            return {
                ...state,
                user: action.payload
            };


        default:
            return state;
    }
}
