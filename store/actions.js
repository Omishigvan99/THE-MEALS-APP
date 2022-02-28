export const TOGGLE_FAV = "TOGGLE_FAV";
export const SET_FILTERS = "SET_FILTERS";

export let toggleFavorite = (mealId) => {
    return { type: TOGGLE_FAV, mealId: mealId };
};

export let setFilters = (filterOptions) => {
    return { type: SET_FILTERS, filterSettings: filterOptions };
};
