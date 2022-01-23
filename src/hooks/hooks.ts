import { Meeting } from '../context/AppState';
import { useContext } from 'react'
import { AppContext } from '../context/AppState' 
import { Db } from '../db/Db';
import { nanoid } from 'nanoid'

const db = new Db()

export function useAddNewMeetup() {

    const { dispatch } = useContext(AppContext)
  
    const mutate = (value: Meeting) => {

        const newId = nanoid()
        
        const objectWithId = {
            ...value,
            id: newId
        }

      try {
  
        db.setMeetup([...db.getMeetup(), objectWithId]);
        const meetups = db.getMeetup()
        dispatch({ type: 'SET_MEETUPS', payload: meetups })
  
  
      } catch (error) {
        console.log(error);
      }
    };
  
    return { mutate };
}
