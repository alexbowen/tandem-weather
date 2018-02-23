/**
 * @param {Array} list
 * @param {Number} interval
 * @param {Function} boundryFn 
 */
export const pad = ({list, interval}, boundryFn) => {

    const index = list.findIndex(value => isBoundry(value, boundryFn))

    return new Array(interval - index).fill(null)
        .concat(list)
        .concat(new Array(interval - (interval - index)).fill(null))
}

/**
 * @param {Array} list
 * @param {Number} interval
 */
export const integrity = ({list, interval}) => list.length % interval === 0

/**
 * @param {*} value 
 * @param {Function} testFn 
 */
export const isBoundry = (value, testFn) => testFn(value)