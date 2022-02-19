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
import { colors } from "../constants/colors";

const MealCategoriesScreen = (props) => {
    let renderCategoryGridItem = (itemData) => {
        return (
            <TouchableOpacity
                style={styles.categoryCard}
                activeOpacity={0.4}
                onPress={() => {
                    props.navigation.navigate({
                        routeName: "Category",
                        params: {
                            categoryId: itemData.item.id,
                            categoryTitle: itemData.item.title,
                        },
                    });
                }}
            >
                <View>
                    <Text
                        style={{
                            fontFamily: "architects-daughter",
                            fontSize: 18,
                        }}
                    >
                        {itemData.item.title}
                    </Text>
                </View>
            </TouchableOpacity>
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
    categoryCard: {
        flex: 1,
        margin: 15,
        height: 100,
    },
});
