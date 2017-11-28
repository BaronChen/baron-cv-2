import { postFormspree } from '../common/fetch-page-data';
import { showNotification } from '../common/common.actions';

export const actionTypes = {
    SUBMIT_FORM: 'SUBMIT_FORM',
    SUBMIT_FORM_SUCCESS: 'SUBMIT_FORM_SUCCESS',
    SUBMIT_FORM_FAIL: 'SUBMIT_FORM_FAIL',
    SET_FOOTER_VISIBILITY: 'SET_FOOTER_VISIBILITY'
}

export const submitForm = () => {
    return {
        type: actionTypes.SUBMIT_FORM
    }
}

export const submitFormSuccess = () => {
    return {
        type: actionTypes.SUBMIT_FORM_SUCCESS
    }
}

export const submitFormFail = () => {
    
    return {
        type: actionTypes.SUBMIT_FORM_FAIL
    }
}

export const setFooterVisibility = (showFooter) => {
    return {
        type: actionTypes.SET_FOOTER_VISIBILITY,
        showFooter
    }
}

export const postForm = (form) => {
    return function (dispatch) {
        dispatch(submitForm(form));
        return postFormspree(form).then(response => {
            if (response.status >= 400) {
                throw new Error("Bad response from server");
            }
            return response.json();
        })
        .then(json => {
                dispatch(submitFormSuccess());
                dispatch(showNotification('Success!', 'Thank you for contacting us.', 'success'));
            }
        ).catch(
            error => {
                dispatch(submitFormFail());
                dispatch(showNotification('Opps!', 'Something has went wrong. Please try again.', 'error'));
            }
        );
    }
}
