export const actionTypes = {
    CHANGE_LANGUAGE: 'CHANGE_LANGUAGE'
}

export const changeLanguage = (locale) =>{
    return {
        type: actionTypes.CHANGE_LANGUAGE,
        locale
    }
}

