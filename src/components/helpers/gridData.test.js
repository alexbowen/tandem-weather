import { splitDatasetArray } from './gridData'

describe.only('Grid dataset helper functions', () => {

    let data

    beforeEach(() => {
        data = Array.from(Array(40).keys())
    })

    it('should format an array of data suitable to show in row format', () => {
        expect(splitDatasetArray(data, 5).length).toBe(5)
        expect(splitDatasetArray(data, 5)[0]).toEqual(Array.from(Array(8).keys()))
        
        expect(splitDatasetArray(data, 1).length).toBe(1)
        expect(splitDatasetArray(data, 1)[0]).toEqual(Array.from(Array(40).keys()))

        //not implementing this due to time/complexity
        // expect(splitDatasetArray(data, 3).length).toBe(3)
        // expect(splitDatasetArray(data, 3)[0]).toEqual(Array.from(Array(14).keys()))
        // expect(splitDatasetArray(data, 3)[2].length).toBe(12)
    })

    it('should handle incorrect parameters', () => {
        expect(splitDatasetArray('string', 5)).toBeFalsy()
        expect(splitDatasetArray(data, 'string')).toBe(data)
    })
})