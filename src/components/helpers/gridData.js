/**
 * @param {Array} data
 * @param {Integer} rows 
 */
export const splitDatasetArray = (data, rows) => {
    if (!Array.isArray(data)) {
        return false
    }

    if (!Number.isInteger(rows) || typeof rows !== 'number') {
        return data
    }

    return Array.from(Array(rows).keys(), row => {
        const itemsPerRow = numberOfItemsPerRow(data, rows)
        return data.slice(row * itemsPerRow, (row + 1) * itemsPerRow)
    })
}

/**
 * @param {Array} items 
 * @param {Integer} numberOfRows 
 */
const numberOfItemsPerRow = (items, numberOfRows) => items.length / numberOfRows