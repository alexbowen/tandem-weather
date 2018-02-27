export const request = async params => {
    const response = await fetch(params.url)
    return await response.json()
}