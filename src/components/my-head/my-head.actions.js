export const actionTypes = {
    UPDATE_TITLE: 'UPDATE_TITLE',
    UPDATE_METAS: 'UPDATE_METAS'
}

export const updateTitle = (newTitle) =>{
    return {
        type: actionTypes.UPDATE_TITLE,
        newTitle
    }
}

export const updateMetas = (newMetas) =>{
    return {
        type: actionTypes.UPDATE_METAS,
        newMetas
    }
}