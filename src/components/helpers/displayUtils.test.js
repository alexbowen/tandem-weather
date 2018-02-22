import { convertKelvinToCelsius } from './displayUtils'

describe('Display utility functions', () => {

    describe('convertKelvinToCelsius', () => {

        it('should handle incorrect parameters', () => {
            expect(convertKelvinToCelsius(300)).toBe(27)
        })
    })
})