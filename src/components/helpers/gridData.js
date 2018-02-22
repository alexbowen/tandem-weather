export const splitDatasetArray = (dataArray, numberOfRows) => {
    
    if (!Array.isArray(dataArray)) {
        return false
    }

    if (!Number.isInteger(numberOfRows) || typeof numberOfRows !== 'number') {
        return dataArray
    }

    return Array.from(Array(numberOfRows).keys(), row => {
        return dataArray.slice(row * (dataArray.length / numberOfRows), (row + 1) * (dataArray.length / numberOfRows))
    })
}