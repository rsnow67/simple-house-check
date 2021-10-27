export const currentDate = () => {
    const today = new Date();
    return `${today.getFullYear()}-${today.getMonth() + 1}-${today.getDate()}`
}

export const tomorrowDate = () => {
    const tomorrow = new Date(new Date().getTime() + 24 * 60 * 60 * 1000)
    return `${tomorrow.getFullYear()}-${tomorrow.getMonth() + 1}-${tomorrow.getDate()}`
}