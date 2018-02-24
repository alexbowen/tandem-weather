import { splitDatasetArray } from './gridData'

describe('Grid dataset helper functions', () => {

    const generateArray = size => Array.from(new Array(size).keys())

    it('should format an array of data suitable to show in row format', () => {
        expect(splitDatasetArray(generateArray(40), 8).length).toBe(5)
        expect(splitDatasetArray(generateArray(40), 8)[0]).toEqual(generateArray(8))
    })

    it('should handle incorrect parameters', () => {
        expect(splitDatasetArray('string', 5)).toBeFalsy()
        expect(splitDatasetArray(generateArray(40), 'string')).toEqual(generateArray(40))
    })
})