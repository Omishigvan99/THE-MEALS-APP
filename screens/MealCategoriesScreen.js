import {
    StyleSheet,
    Text,
    View,
    Button,
    FlatList,
    TouchableOpacity,
    Platform,
} from "react-native";
import React from "react";
import { CATEGORIES } from "../data/dummy-data";
import CategoryCard from "../components/CategoryCard";

const MealCategoriesScreen = (props) => {
    let renderCategoryGridItem = (itemData) => {
        return (
            <CategoryCard
                itemData={itemData}
                onSelect={() => {
                    props.navigation.navigate("Category Meals", {
                        categoryId: itemData.item.id,
                        categoryName: itemData.item.title,
                    });
                }}
            ></CategoryCard>
        );
    };

    return (
        <FlatList
            keyExtractor={(item, index) => {
                return item.id;
            }}
            data={CATEGORIES}
            numColumns={2}
            renderItem={renderCategoryGridItem}
        ></FlatList>
    );
};

export default MealCategoriesScreen;

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
});
