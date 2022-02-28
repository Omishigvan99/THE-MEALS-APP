import { StyleSheet, Text, View } from "react-native";
import React from "react";
import MealsList from "../components/MealsList";
import { useSelector } from "react-redux";
import FallbackEmptyUI from "../components/FallbackEmptyUI";

const FavouriteMealsScreen = (props) => {
    let availableMeals = useSelector((state) => state.meals.favoriteMeals);
    let mealsDisplayList = availableMeals;

    if (mealsDisplayList.length === 0) {
        return <FallbackEmptyUI></FallbackEmptyUI>;
    }

    return (
        <View style={styles.screen}>
            <MealsList
                mealsDisplayList={mealsDisplayList}
                navigation={props.navigation}
            ></MealsList>
        </View>
    );
};

export default FavouriteMealsScreen;

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
});
