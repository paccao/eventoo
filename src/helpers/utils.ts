import { State } from "../context/AppState"
import MeetupListPage from "../pages/MeetupListPage"


export function isAttending(bookedMeetups: string[], id: string): boolean {

     return bookedMeetups.some(meetup => meetup === id)

}
