import csvToJson from 'csvtojson'

export const convertToJson = csv => {
    return new Promise((resolve, reject) => {
        csvToJson()
            .fromString(csv)
            .on('end_parsed', (result) => {
                resolve(result)
            })
            .on('error', err => {
                console.log(err)
            })
    })
}