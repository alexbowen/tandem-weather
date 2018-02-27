import { convertToJson } from './csv'

const csv = `time,temp
2017-07-23 09:00:00,291.12
2017-07-23 12:00:00,292.00`

describe('Data helper functions', () => {
    describe('convertToJson', () => {
        it('should convert csv to JSON', () => {
            return convertToJson(csv).then(data => {
                expect(data).toEqual([
                    { time: '2017-07-23 09:00:00', temp: "291.12" },
                    { time: '2017-07-23 12:00:00', temp: "292.00" }
                ])
            })
        })
    })
})