/**
 * Combine all reducers in this file and export the combined reducers.
 * If we were to do this in store.js, reducers wouldn't be hot reloadable.
 */

import { combineReducers } from 'redux-immutable';
import { fromJS } from 'immutable';
import { LOCATION_CHANGE } from 'react-router-redux';
import languageProviderReducer from 'containers/LanguageProvider/reducer';
import CONSTANTS from 'constants'

/*
 * routeReducer
 *
 * The reducer merges route location changes into our immutable state.
 * The change is necessitated by moving to react-router-redux@4
 *
 */

// Initial routing state
const routeInitialState = fromJS({
  locationBeforeTransitions: null,
});

/**
 * Merge route into the global application state
 */
function routeReducer(state = routeInitialState, action) {
  switch (action.type) {
    /* istanbul ignore next */
    case LOCATION_CHANGE:
      return state.merge({
        locationBeforeTransitions: action.payload,
      });
    default:
      return state;
  }
}


/*
* Session/user state
*/
const userInitialState = fromJS({
  user: null
})

function userReducer(state = userInitialState, action) {
  switch (action.type) {
    case CONSTANTS.USER_SIGNED_IN:
      // set action.user to user key
    case CONSTANTS.USER_SIGNED_OUT:
      return userInitialState
    default:
      return state
  }
}

/*
 * Global error state
 */
const errorInitialState = fromJS({
  errors: null
})
function errorReducer(state = errorInitialState, action) {
  switch (action.type) {
    case CONSTANTS.ERROR_SESSIONS:
      // return with session error
    case CONSTANTS.ERROR_REGISTRATIONS:
      // return with registration error
    default:
      return state
  }
}

/**
 * Creates the main reducer with the asynchronously loaded ones
 */
export default function createReducer(asyncReducers) {
  return combineReducers({
    errors: errorReducer,
    user: userReducer,
    route: routeReducer,
    language: languageProviderReducer,
    ...asyncReducers,
  });
}
