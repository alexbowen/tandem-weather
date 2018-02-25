/**
 * @param {Array} list
 * @param {Number} interval
 * @param {Function} boundryFn 
 */
export const pad = (list, interval, boundryFn) => {

    //find index in result array that represents a boundry
    const index = list.findIndex(value => isBoundry(value, boundryFn))

    if (index === 0) {
        return list
    }

    const result = nullArray(interval - index).concat(list)

    //add back fill to array if it doesnt represent complete days
    let backFill = []

    if (result.length % interval !== 0) {
        backFill = nullArray(interval - (result.length % interval))
    }

    return result.concat(backFill)
}

/**
 * @param {*} value 
 * @param {Function} testFn 
 */
export const isBoundry = (value, testFn) => testFn(value)

/**
 * @param {Integer} length 
 */
const nullArray = length => new Array(length).fill(null)