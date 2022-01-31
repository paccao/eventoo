import { shortenLongStrings } from '../shortenLongString'

describe('ShortenLongStrings', () => {

    it('should shorten string from "Räkjuicetillverkning med greger" to "Räkjuicettillv..." (sets max length string size to 14 characters)', () => {
        const testData = 'Räkjuicetillverkning med greger'
        const actual = shortenLongStrings(testData, 13)
        expect(actual).toBe('Räkjuicetillv...')
    })

})