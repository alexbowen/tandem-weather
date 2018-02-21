import { splitDatasetArray } from './gridData'

describe.only('Grid dataset helper functions', () => {

    let data

    beforeEach(() => {
        data = Array.from(Array(40).keys())
    })

    it('should format an array of data suitable to show in row format', () => {
        expect(splitDatasetArray(data, 5).length).toBe(5)
        expect(splitDatasetArray(data, 1).length).toBe(1)
        expect(splitDatasetArray(data, 2.5).length).toBe(3)
        expect(splitDatasetArray(data, 2.4).length).toBe(2)
    })
})