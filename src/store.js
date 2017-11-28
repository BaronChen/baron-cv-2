import { createStore, applyMiddleware, combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import thunkMiddleware from 'redux-thunk';
import { polyglotReducer, createPolyglotMiddleware } from 'redux-polyglot';
import { routerReducer, routerMiddleware } from 'react-router-redux';
import createHistory from 'history/createBrowserHistory';

import { composeWithDevTools } from 'redux-devtools-extension/logOnlyInProduction';

import { initialMyHeadState, myHead } from './components/my-head/my-head.reducer';
import { initialNavbarState, myNavbar } from './components/my-navbar/my-navbar.reducer';
import { initialFooterState, footer } from './components/footer/footer.reducer';
import { initialNotificationState, notification } from './components/common/common.reducer';
import { fetchPageData } from './components/common/fetch-page-data';
import { snapshot } from 'react-snapshot';


const initialState = {
    myHead: initialMyHeadState,
    myNavbar: initialNavbarState,
    footer: initialFooterState,
    notification: initialNotificationState
};

const reducers = combineReducers({
    myHead,
    myNavbar,
    footer,
    notification,
    polyglot: polyglotReducer,
    form: formReducer,
    router: routerReducer
});

const getLocale = (action) => {
    return action.locale;
}

const getPhrase = (locale) => {
    return snapshot(() => (fetchPageData(locale)));
}

const polyglotMiddleware = createPolyglotMiddleware(
    'CHANGE_LANGUAGE',
    getLocale,
    getPhrase,
)

export const history = createHistory();

const myRouterMiddleware = routerMiddleware(history);

const composeEnhancers = composeWithDevTools({
  // options like actionSanitizer, stateSanitizer
});

export const initStore = (state = initialState) => {
    return createStore(reducers, state, 
        composeEnhancers(applyMiddleware(myRouterMiddleware, thunkMiddleware, polyglotMiddleware)));
}

