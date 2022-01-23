import { Meeting } from '../context/AppState';

export class Db {
    setMeetup(meetup: Meeting[]): void {
        const meetupString = JSON.stringify(meetup);
        localStorage.setItem('meetup', meetupString);
    }

    getMeetup(): Meeting[] {
        if (localStorage.getItem('meetup') === null) {
            return [];
        } else {
            return JSON.parse(localStorage.getItem('meetup') || '');
        }
    }
}

const db = new Db();
