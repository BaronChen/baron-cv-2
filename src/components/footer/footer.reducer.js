import { actionTypes } from './footer.actions';

export const initialFooterState  = {
    showFooter: false,
    isFetching: false,
    isFetchingError: false
}

export const footer = (state  = initialFooterState, action)  => {
    switch (action.type) {
        case actionTypes.SET_FOOTER_VISIBILITY:
            return Object.assign({}, state, {showFooter: action.showFooter});
        case actionTypes.SUBMIT_FORM:
            return Object.assign({}, state, {isFetching: true});
        case actionTypes.SUBMIT_FORM_SUCCESS:
            return Object.assign({}, state, {
                isFetching: false, 
                isFetchingError:false
            });
        case actionTypes.SUBMIT_FORM_FAIL:
            return Object.assign({}, state, {
                isFetching: false, 
                isFetchingError:true
            });
        default:
            return state;
    }
}
