export const formatDate = (date = '') => {
    const d = date.toString()
    const year = d.substring(0, 4);
    const month = d.substring(5, 7);
    const day = d.substring(8, 10);
    const formatted = `${day}/${month}/${year}`
    return formatted.toString()
}
