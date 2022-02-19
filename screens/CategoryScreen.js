import { StyleSheet, Text, View, Button } from "react-native";
import React from "react";

const CategoryScreen = (props) => {
    let title = props.navigation.getParam("categoryTitle");
    return (
        <View style={styles.screen}>
            <Text>CategoryScreen</Text>
            <Text>{title}</Text>
            <Button
                title={"Go to Meal Details"}
                onPress={() => {
                    props.navigation.navigate("MealDetails");
                }}
            ></Button>
        </View>
    );
};

export default CategoryScreen;

CategoryScreen.navigationOptions = (navigationData) => {
    let title = navigationData.navigation.getParam("categoryTitle");

    return {
        headerTitle: title,
    };
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
});
