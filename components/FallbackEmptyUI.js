import { StyleSheet, Text, View } from "react-native";
import React from "react";

const FallbackEmptyUI = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.infoText}>Nothing to show here.</Text>
        </View>
    );
};

export default FallbackEmptyUI;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    infoText: {
        fontFamily: "open-sans-regular",
        color: "#AAA",
    },
});
