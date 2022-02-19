import { StyleSheet, Text, View } from "react-native";
import React from "react";

const FilterScreen = () => {
    return (
        <View style={styles.screen}>
            <Text>FilterScreen</Text>
        </View>
    );
};

export default FilterScreen;

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
});
