/**
 * @param {Array} list
 * @param {Number} interval
 * @param {Function} boundryFn 
 */
export const pad = (list, interval, boundryFn) => {

    const index = list.findIndex(value => isBoundry(value, boundryFn))

    if (index === 0) {
        return list
    }

    return new Array(interval - index).fill(null).concat(list)
}

/**
 * @param {*} value 
 * @param {Function} testFn 
 */
export const isBoundry = (value, testFn) => testFn(value)