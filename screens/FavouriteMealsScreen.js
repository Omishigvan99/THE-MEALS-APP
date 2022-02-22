import { StyleSheet, Text, View } from "react-native";
import React from "react";
import MealsList from "../components/MealsList";
import { MEALS } from "../data/dummy-data";

const FavouriteMealsScreen = (props) => {
    let mealsDisplayList = MEALS.filter((item) => {
        return item.id === "m1" || item.id === "m2";
    });

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
