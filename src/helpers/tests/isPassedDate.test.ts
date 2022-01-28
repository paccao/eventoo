import { isPassedDate } from '../isPassedDate';
import { currentDatePlusOneYear } from '../currentDate'

describe('isPassedDate function', () => {
    it('should return true when the date passed as argument is passed current date (`one year in the future`)', () => {
        const testDate = currentDatePlusOneYear(true)

        const actual = isPassedDate(testDate);

        expect(actual).toBe(false);
    });

    it('should return false when the date passed as argument is before current date (`2021-01-24 15:19`)', () => {
        const testDate = '2021-01-24 15:19';

        const actual = isPassedDate(testDate);

        expect(actual).toBe(true);
    });
});
