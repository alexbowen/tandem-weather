/**
 * @param {Array} data
 * @param {Integer} rows 
 */
export const splitDatasetArray = (data, columns) => {
    if (!Array.isArray(data)) {
        return false
    }

    if (!Number.isInteger(columns) || typeof columns !== 'number') {
        return data
    }

    return Array.from(new Array(data.length /columns).keys(), row => {
        return data.slice(row * columns, (row + 1) * columns)
    })
}
