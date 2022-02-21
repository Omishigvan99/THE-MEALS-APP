import { StyleSheet, Text, View, FlatList } from "react-native";
import React from "react";
import { MEALS } from "../data/dummy-data";
import MealCard from "../components/MealCard";

const CategoryScreen = (props) => {
    // let title = props.navigation.getParam("categoryTitle");
    let id = props.route.params.categoryId;

    let mealsDisplayList = MEALS.filter((item) => {
        return item.categoriesId.indexOf(id) >= 0;
    });

    return (
        <View style={styles.screen}>
            <FlatList
                style={{ width: "100%", padding: 10 }}
                data={mealsDisplayList}
                renderItem={(itemData) => {
                    return (
                        <MealCard
                            title={itemData.item.title}
                            duration={itemData.item.duration}
                            affordability={itemData.item.affordability}
                            complexity={itemData.item.complexity}
                            imageUrl={itemData.item.imageUrl}
                            onPress={() => {
                                props.navigation.navigate({
                                    name: "Meal Details",
                                    params: {
                                        mealId: itemData.item.id,
                                        mealTitle: itemData.item.title,
                                    },
                                });
                            }}
                        ></MealCard>
                    );
                }}
            ></FlatList>
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
