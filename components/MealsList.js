import { StyleSheet, FlatList } from "react-native";
import React from "react";
import MealCard from "../components/MealCard";

const MealsList = (props) => {
    return (
        <FlatList
            style={{ width: "100%", padding: 10 }}
            data={props.mealsDisplayList}
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
    );
};

export default MealsList;

const styles = StyleSheet.create({});
