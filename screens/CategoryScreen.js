import { StyleSheet, View } from "react-native";
import React from "react";
import { MEALS } from "../data/dummy-data";
import MealsList from "../components/MealsList";

const CategoryScreen = (props) => {
    // let title = props.navigation.getParam("categoryTitle");
    let id = props.route.params.categoryId;

    let mealsDisplayList = MEALS.filter((item) => {
        return item.categoriesId.indexOf(id) >= 0;
    });

    return (
        <View style={styles.screen}>
            <MealsList
                navigation={props.navigation}
                mealsDisplayList={mealsDisplayList}
            ></MealsList>
        </View>
    );
};

export default CategoryScreen;

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
});
