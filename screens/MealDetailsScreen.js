import { StyleSheet, Text, View, Image, ScrollView } from "react-native";
import React, { useEffect, useState } from "react";
import { colors } from "../constants/colors";
import { useDispatch, useSelector } from "react-redux";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import CustomHeaderButton from "../components/CustomHeaderButton";
import { toggleFavorite } from "../store/actions";

const MealDetailsScreen = (props) => {
    let mealId = props.route.params.mealId;
    let [isFavorite, setIsFavorite] = useState(props.route.params.isFavorite);

    let availableMeals = useSelector((state) => state.meals.meals);

    let dispatch = useDispatch();

    useEffect(() => {
        props.navigation.setOptions({
            headerRight: () => (
                <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
                    <Item
                        title="fav"
                        iconName={isFavorite ? "favorite" : "favorite-outline"}
                        onPress={() => {
                            dispatch(toggleFavorite(mealId));
                            setIsFavorite((prev) => !prev);
                        }}
                    ></Item>
                </HeaderButtons>
            ),
        });
    }, [isFavorite]);

    let mealDetails = availableMeals.find((item) => {
        return item.id === mealId;
    });

    return (
        <ScrollView contentContainerStyle={styles.screen}>
            <View style={styles.imageContainer}>
                <Image
                    style={styles.image}
                    source={{ uri: mealDetails.imageUrl }}
                ></Image>
            </View>
            <View style={styles.infoContainer}>
                <Text style={styles.info}>
                    {mealDetails.duration + " min".toUpperCase()}
                </Text>
                <Text style={styles.info}>
                    {mealDetails.complexity.toUpperCase()}
                </Text>
                <Text style={styles.info}>
                    {mealDetails.affordability.toUpperCase()}
                </Text>
            </View>
            <View style={styles.subInfoContainer}>
                <View style={styles.titleContainer}>
                    <Text style={styles.title}>Ingredients...</Text>
                </View>
                {mealDetails.ingredients.map((item, index) => {
                    return (
                        <Text key={index} style={styles.subInfo}>
                            {item}
                        </Text>
                    );
                })}
            </View>
            <View style={styles.subInfoContainer}>
                <View style={styles.titleContainer}>
                    <Text style={styles.title}>Directions</Text>
                </View>
                {mealDetails.steps.map((item, index) => {
                    return (
                        <Text key={index} style={styles.subInfo}>
                            {item}
                        </Text>
                    );
                })}
            </View>
        </ScrollView>
    );
};

export default MealDetailsScreen;

const styles = StyleSheet.create({
    screen: {
        flexGrow: 1,
        paddingBottom: 15,
        alignItems: "center",
    },
    imageContainer: {
        width: "100%",
        height: 200,
    },
    image: {
        height: "100%",
        width: "100%",
    },
    infoContainer: {
        flexDirection: "row",
        justifyContent: "space-evenly",
        width: "100%",
        paddingVertical: 10,
    },
    subInfoContainer: {
        paddingHorizontal: 20,
        width: "100%",
    },
    titleContainer: {
        borderBottomWidth: 2,
        borderBottomColor: colors.primaryColor,
    },
    title: {
        fontSize: 30,
        fontFamily: "architects-daughter",
        marginTop: 10,
        textTransform: "uppercase",
    },
    subInfo: {
        fontFamily: "architects-daughter",
        paddingLeft: 10,
        marginBottom: 5,
        fontSize: 18,
        color: "#777",
    },
});
