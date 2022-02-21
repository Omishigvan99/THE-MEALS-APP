import { StyleSheet, Text, View, Button } from "react-native";
import React from "react";
import { MEALS } from "../data/dummy-data";

const MealDetailsScreen = (props) => {
    let mealId = props.route.params.mealId;

    let mealDetails = MEALS.find((item) => {
        return item.id === mealId;
    });

    return (
        <View style={styles.screen}>
            <Text>MealDetailsScreen {mealDetails.title}</Text>
            <Button
                title="Go Back"
                onPress={() => {
                    // props.navigation.navigate("Category") one way ro go back manually but you need to remember what screnn was previous top
                    // props.navigation.pop() one way
                    props.navigation.goBack(); //second way
                }}
            ></Button>
            <Button
                title="Go To Home"
                onPress={() => {
                    props.navigation.popToTop(); //used to got to first screen that got added to stack navigator
                    // props.navigation.replace("MealCategories") //replaces to top screen with specified screen
                }}
            ></Button>
        </View>
    );
};

export default MealDetailsScreen;

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
});
