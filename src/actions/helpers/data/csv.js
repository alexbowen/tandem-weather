import data from '../../../data/csv'
import { convertToJson } from '../../../data/helpers/csv'

export const get = async params => {
    return {
        ...data,
        list: await convertToJson(data.list)
    }
}