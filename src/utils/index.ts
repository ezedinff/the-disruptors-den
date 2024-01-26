export const getCurrentFormattedDate = (format: string = 'ISO'): string => {
    const date = new Date();
    if (format === 'ISO') {
        return date.toISOString();
    } else if (format === 'Locale') {
        return date.toLocaleString();
    } else if (format === 'UTC') {
        return date.toUTCString();
    } else if (format === 'Time') {
        return date.toLocaleTimeString();
    } else if (format === 'Date') {
        return date.toLocaleDateString();
    } else if (format === 'year') {
        return date.getFullYear().toString();
    } else if (format === 'month') {
        return date.getMonth().toString();
    } else if (format === 'day') {
        return date.getDay().toString();
    } else {
        throw new Error('Invalid date format');
    }
};