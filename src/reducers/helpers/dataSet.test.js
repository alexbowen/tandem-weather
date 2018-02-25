import { dataSet1, dataSet2 } from './dataSet.mock'
import { pad, isBoundry } from './dataSet'

describe('Dataset', () => {

    it('should contain a list array', () => {
        expect(dataSet1.list).toBeDefined()
        expect(Array.isArray(dataSet1.list)).toBe(true)
    })

    it('should contain an interval integer', () => {
        expect(dataSet1.interval).toBeDefined()
        expect(typeof dataSet1.interval).toBe('number')
        expect(dataSet1.interval % 1).toBe(0)
    })

    it('should pad forecast array with empty elements that fall out side forecast period', () => {
        const boundryFn = (value) => new Date(value.dt_txt).getHours() === 0

        expect(pad(dataSet1.list, dataSet1.interval, boundryFn))
            .toEqual([null, null, null, null, null].concat(dataSet1.list))
    })

    it('should back fill forecast array if it doesn\'t represent full day', () => {
        const boundryFn = (value) => new Date(value.dt_txt).getHours() === 0

        expect(pad(dataSet2.list, dataSet2.interval, boundryFn))
            .toEqual([null, null, null, null, null, null, null].concat(dataSet2.list).concat([null]))
    })
})