import { State } from '../context/AppState';
import { useContext } from 'react'
import { AppContext } from '../context/AppState' 
import { Db } from '../db/Db';

const db = new Db()

export function useStoreHook() {

    const { dispatch } = useContext(AppContext)
  
    const mutate = (value: State) => {

      try {
  
        db.setState(value);
        dispatch({ type: 'SET_STATE', payload: db.getState()})
  
      } catch (error) {
        console.log(error);
      }

    };
  
    return { mutate };
}