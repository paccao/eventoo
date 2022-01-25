export function isPassedDate(meetupDate: string): boolean {
    //`2022-01-24 15:19`

    const currentDate = Date.now()

    const parsedMeetupDate = Date.parse(meetupDate)
 
    return currentDate < parsedMeetupDate && true
    
    

}