import { dataSet1, dataSet2 } from './dataSet.mock'
import { pad, applyMapping } from './dataSet'

describe('Dataset', () => {

    describe('pad method', () => {
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

    describe('applyMapping method', () => {

        let data

        beforeEach(() => {
            data = [{
                key1: 'value1',
                main: {
                    key2: 'value2'
                }
            }]
        })

        it('should apply mapping function to normalise data', () => {
            const mappingFn = interval => {
                return {
                    time: interval.key1,
                    temp: interval.main.key2
                }
            }

            expect(applyMapping(data, mappingFn)).toEqual([{ time: 'value1', temp: 'value2' }])
        })

        it('should return original data if no mapping function supplied', () => {
            expect(applyMapping(data, null)).toEqual(data)
        })
    })
})