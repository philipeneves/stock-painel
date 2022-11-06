export const formatDate = (date) => {
    let dateParts

    if (!date) return ''

    if (typeof date === 'string') dateParts = date.slice(0, 10).split('-')
    else dateParts = date.toISOString().slice(0, 10).split('-')

    return `${dateParts[2]}/${dateParts[1]}/${dateParts[0]}`
}