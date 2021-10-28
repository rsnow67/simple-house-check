export const getDate = (incr = 0) => {
    const today = new Date();
    today.setDate(today.getDate() + incr);

    let dd = today.getDate();

    if (dd < 10) {
        dd = `0${dd}`;
    }

    return `${today.getFullYear()}-${today.getMonth() + 1}-${dd}`
}