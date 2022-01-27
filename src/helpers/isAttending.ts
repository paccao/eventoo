

export function isAttending(bookedMeetups: string[], id: string | undefined): boolean {

     if (!bookedMeetups) {
          return false
     } else {
          return bookedMeetups.some(meetup => meetup === id)
     }
}
