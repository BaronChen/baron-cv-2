
export const actionTypes = {
    SHOW_NOTIFICATION: 'SHOW_NOTIFICATION'
}

export const showNotification = (title, message, level) => {
    return {
        type: actionTypes.SHOW_NOTIFICATION,
        title,
        message,
        level
    }
}