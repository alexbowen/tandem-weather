import { dataSet } from './dataSet.mock'
import { pad, integrity, isBoundry } from './dataSet'

describe('Dataset', () => {

    it('should contain a list array', () => {
        expect(dataSet.list).toBeDefined()
        expect(Array.isArray(dataSet.list)).toBe(true)
    })

    it('should contain an interval integer', () => {
        expect(dataSet.interval).toBeDefined()
        expect(typeof dataSet.interval).toBe('number')
        expect(dataSet.interval % 1).toBe(0)
    })

    it('should have list that has a length that is a multiple of the interval', () => {
        expect(integrity(dataSet.list, dataSet.interval)).toBe(true)
    })

    it('should pad forecast array with empty elements that fall out side forecast period', () => {
        const boundryFn = (value) => new Date(value).getHours() === 0
        expect(pad({...dataSet, boundryFn})).toEqual([null, null, null, null].concat(dataSet.list).concat([null, null, null]))
    })
})