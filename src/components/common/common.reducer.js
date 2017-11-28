import { actionTypes } from './common.actions';

export const initialNotificationState  = {
    title: '',
    message: '',
    level: ''
}

export const notification = (state  = initialNotificationState, action)  => {
    switch (action.type) {
        case actionTypes.SHOW_NOTIFICATION:
            return Object.assign({}, state, {
                title: action.title,
                message: action.message,
                level: action.level
            });
        default:
            return state;
    }
}
