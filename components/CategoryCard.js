import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import React from "react";
import { shadowOffset } from "react-native/Libraries/Components/View/ReactNativeStyleAttributes";

const Category = ({ itemData, onSelect }) => {
    return (
        <TouchableOpacity
            style={{
                ...styles.categoryCard,
                backgroundColor: itemData.item.color,
            }}
            activeOpacity={0.4}
            onPress={onSelect}
        >
            <View>
                <Text
                    style={{
                        fontFamily: "architects-daughter",
                        fontSize: 18,
                    }}
                    numberOfLines={1}
                >
                    {itemData.item.title}
                </Text>
            </View>
        </TouchableOpacity>
    );
};

export default Category;

const styles = StyleSheet.create({
    categoryCard: {
        flex: 1,
        justifyContent: "flex-end",
        alignItems: "flex-end",
        margin: 15,
        height: 100,
        padding: 10,
        borderRadius: 15,
        shadowColor: "black",
        shadowOffset: {
            height: 2,
            width: 2,
        },
        shadowRadius: 5,
        shadowOpacity: 0.6,
        elevation: 5,
    },
});
