import { actionTypes } from './my-head.actions';

export const initialMyHeadState  = {
    title: '',
    metas: []
}

export const myHead = (state  = initialMyHeadState, action)  => {
    switch (action.type) {
        case actionTypes.UPDATE_TITLE:
            return Object.assign({}, state, {title: action.newTitle});
        case actionTypes.UPDATE_METAS:
            return Object.assign({}, state, {metas:  action.newMetas || [] });
        default:
            return state;
    }
}