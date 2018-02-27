import { get } from './csv'
import { request } from './xhr'

export const fetchData = (type, params) => {
    switch (type) {
        case 'json':
            return request(params.xhr)

        case 'csv':
            return get()

        default:
            return request(params.xhr)
    }
}