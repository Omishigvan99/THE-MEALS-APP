import { StyleSheet, FlatList } from "react-native";
import React from "react";
import MealCard from "../components/MealCard";
import { useSelector } from "react-redux";

const MealsList = (props) => {
    let favoriteMeals = useSelector((state) => state.meals.favoriteMeals);
    return (
        <FlatList
            style={{ width: "100%", padding: 10 }}
            data={props.mealsDisplayList}
            renderItem={(itemData) => {
                let isFav = favoriteMeals.some(
                    (meal) => meal.id === itemData.item.id
                );
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
                                    isFavorite: isFav,
                                },
                            });
                        }}
                    ></MealCard>
                );
            }}
        ></FlatList>
    );
};

export default MealsList;

const styles = StyleSheet.create({});
