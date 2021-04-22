import { createSelector } from "reselect";

const loading = (stateApp) => stateApp.loading;

const array = (stateApp) => stateApp.array;

const filterName = (stateApp) => stateApp.filterName;

const visibleAlert = (stateApp) => stateApp.visibleAlert;

const filteredArray = createSelector([array, filterName], (array, filterName) =>
  array.filter((el) => el.name.toLowerCase().includes(filterName))
);

export default { loading, array, filterName, visibleAlert, filteredArray };
