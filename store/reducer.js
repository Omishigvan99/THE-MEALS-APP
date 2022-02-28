import { MEALS } from "../data/dummy-data";
import { SET_FILTERS, TOGGLE_FAV } from "./actions";

let initialState = {
    meals: MEALS,
    filteredMeals: MEALS,
    favoriteMeals: [],
};

export default mealsReducer = (state = initialState, action) => {
    switch (action.type) {
        case TOGGLE_FAV:
            let existingIndex = state.favoriteMeals.findIndex(
                (meal) => meal.id === action.mealId
            );
            if (existingIndex >= 0) {
                let updateFavMeal = [...state.favoriteMeals];
                updateFavMeal.splice(existingIndex, 1);
                return { ...state, favoriteMeals: updateFavMeal };
            } else {
                let updatedFavList = state.favoriteMeals.concat([
                    state.meals.find((meal) => meal.id === action.mealId),
                ]);
                return { ...state, favoriteMeals: updatedFavList };
            }
        case SET_FILTERS:
            let filteredMeals = state.meals.filter((item) => {
                if (!item.isGlutenFree && action.filterSettings.glutenFree)
                    return false;
                if (!item.isLactoseFree && action.filterSettings.lactoseFree)
                    return false;
                if (!item.isVegan && action.filterSettings.vegan) return false;
                if (!item.isVegetarian && action.filterSettings.vegeterian)
                    return false;

                return true;
            });

            return { ...state, filteredMeals: filteredMeals };
        default:
            return state;
    }
};
