export const splitDatasetArray = (dataArray, numberOfRows) => {

    if (!Array.isArray(dataArray)) {
        return false
    }

    if (!Number.isInteger(numberOfRows) || typeof numberOfRows !== 'number') {
        return dataArray
    }

    return []
}