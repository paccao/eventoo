import React from 'react';
import { isPassedDate } from '../isPassedDate'


describe('isPassedDate function', () => {

    it('should return true when the date passed as argument is passed current date (`2022-01-24 15:19`)  ', () => {
        const testDate = '2022-02-24 15:19'

        const actual = isPassedDate(testDate)
        
        expect(actual).toBe(true)
    });

    it('should return false when the date passed as argument is before current date (`2021-01-24 15:19`)  ', () => {
        const testDate = '2021-01-24 15:19'

        const actual = isPassedDate(testDate)
        
        expect(actual).toBe(false)
    });

});
