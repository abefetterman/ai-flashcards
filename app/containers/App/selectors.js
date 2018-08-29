import { createSelector } from 'reselect';

const selectRoute = state => state.route; //.get('route');

const makeSelectLocation = () =>
  createSelector(selectRoute, routeState => routeState.location); //.get('location').toJS());

export { makeSelectLocation };
