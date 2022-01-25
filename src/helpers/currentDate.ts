
export function currentDate(): string {

    const currentTimeStamp = new Date();

    const date = currentTimeStamp.getFullYear() + '-' + (currentTimeStamp.getMonth() + 1) + '-' + currentTimeStamp.getDate();
    const time = currentTimeStamp.getHours() + ":" + currentTimeStamp.getMinutes();
    return date + ' ' + time;

}

export function currentDatePlusOneYear(): string {

    const currentTimeStamp = new Date();

    const date = currentTimeStamp.getFullYear() + 1 + '-' + (currentTimeStamp.getMonth() + 1) + '-' + currentTimeStamp.getDate();
    const time = currentTimeStamp.getHours() + ":" + currentTimeStamp.getMinutes();
    return date + ' ' + time;

}