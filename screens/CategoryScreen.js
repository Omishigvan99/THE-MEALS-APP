import { StyleSheet, View } from "react-native";
import React from "react";
import MealsList from "../components/MealsList";
import { useSelector } from "react-redux";
import FallbackEmptyUI from "../components/FallbackEmptyUI";

const CategoryScreen = (props) => {
    // let title = props.navigation.getParam("categoryTitle");
    let id = props.route.params.categoryId;

    let availaleMeals = useSelector((state) => state.meals.filteredMeals);

    let mealsDisplayList = availaleMeals.filter((item) => {
        return item.categoriesId.indexOf(id) >= 0;
    });

    if (mealsDisplayList.length === 0) {
        return <FallbackEmptyUI></FallbackEmptyUI>;
    }

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
