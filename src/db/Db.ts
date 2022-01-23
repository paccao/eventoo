import { State } from '../context/AppState';

export class Db {


  setState(meetup: State): void {
    const meetupString = JSON.stringify(meetup)
    localStorage.setItem('state', meetupString)
  }


  getState(): State {
    return JSON.parse(localStorage.getItem('state') || '')
  }

  
}

const db = new Db()