/**
 * Combine all reducers in this file and export the combined reducers.
 */

// import { combineReducers } from 'redux-immutable';
// import { fromJS } from 'immutable';
import { combineReducers } from 'redux';
import { LOCATION_CHANGE } from 'react-router-redux';

import { firebaseReducer } from 'react-redux-firebase';
import { firestoreReducer } from 'redux-firestore';

import languageProviderReducer from 'containers/LanguageProvider/reducer';

/*
 * routeReducer
 *
 * The reducer merges route location changes into our immutable state.
 * The change is necessitated by moving to react-router-redux@4
 *
 */

// Initial routing state
const routeInitialState = { location: null };
// fromJS({
//   location: null,
// });

/**
 * Merge route into the global application state
 */
export function routeReducer(state = routeInitialState, action) {
  switch (action.type) {
    /* istanbul ignore next */
    case LOCATION_CHANGE:
      return {
        ...state,
        location: action.payload,
      };
    default:
      return state;
  }
}

/**
 * Creates the main reducer with the dynamically injected ones
 */
export default function createReducer(injectedReducers) {
  return combineReducers({
    route: routeReducer,
    language: languageProviderReducer,
    firebase: firebaseReducer,
    firestore: firestoreReducer,
    ...injectedReducers,
  });
}
