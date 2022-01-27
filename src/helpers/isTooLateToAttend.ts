export function isTooLateToAttend(meetupDate: string): boolean {
    
    const currentDateMinusOneHour = new Date()

    currentDateMinusOneHour.setHours(currentDateMinusOneHour.getHours() + 1);
    
    const parsedMeetupDate = Date.parse(meetupDate)
    const parsedCurrentDate = Date.parse(currentDateMinusOneHour.toString())


    return parsedMeetupDate < parsedCurrentDate && true

    
}