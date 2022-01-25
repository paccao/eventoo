

export function isAttending(bookedMeetups: string[], id: string): boolean {

     return bookedMeetups.some(meetup => meetup === id)

}
