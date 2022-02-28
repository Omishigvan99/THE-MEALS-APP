import { StyleSheet, Text, View, Switch, Platform } from "react-native";
import React, { useEffect, useState, useCallback } from "react";
import { colors } from "../constants/colors";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import CustomHeaderButton from "../components/CustomHeaderButton";
import { useDispatch } from "react-redux";
import { setFilters } from "../store/actions";

const Filter = ({ label, onChange, value }) => {
    return (
        <View style={styles.filter}>
            <Text style={styles.filterLabel}>{label}</Text>
            <Switch
                value={value}
                onValueChange={onChange}
                trackColor={{ true: colors.primaryColor, false: "#CCC" }}
                thumbColor={
                    Platform.OS === "android" ? colors.primaryColor : ""
                }
            ></Switch>
        </View>
    );
};

const FilterScreen = (props) => {
    const [isGlutenFree, setIsGlutenFree] = useState(false);
    const [isLactoseFree, setIsLactoseFree] = useState(false);
    const [isVegan, setIsVegan] = useState(false);
    const [isVegeterian, setIsVegeterian] = useState(false);
    let dispatch = useDispatch();
    let saveFilters = useCallback(() => {
        const selectedFilters = {
            glutenFree: isGlutenFree,
            lactosFree: isLactoseFree,
            vegan: isVegan,
            vegeterian: isVegeterian,
        };
        console.log(JSON.stringify(selectedFilters));
        dispatch(setFilters(selectedFilters));
    }, [isGlutenFree, isLactoseFree, isVegan, isVegeterian]);

    useEffect(() => {
        props.navigation.setOptions({
            headerRight: () => (
                <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
                    <Item
                        title="save"
                        iconName="save"
                        onPress={() => {
                            saveFilters();
                        }}
                    ></Item>
                </HeaderButtons>
            ),
        });
    }, [saveFilters]);

    return (
        <View style={styles.screen}>
            <Text style={styles.title}>Available filters/restrictions</Text>
            <View style={styles.filtersContainer}>
                <Filter
                    label={"Gluten free"}
                    value={isGlutenFree}
                    onChange={(value) => {
                        setIsGlutenFree(value);
                    }}
                ></Filter>
                <Filter
                    label={"Vegan"}
                    value={isVegan}
                    onChange={(value) => {
                        setIsVegan(value);
                    }}
                ></Filter>
                <Filter
                    label={"Vegeterian"}
                    value={isVegeterian}
                    onChange={(value) => {
                        setIsVegeterian(value);
                    }}
                ></Filter>
                <Filter
                    label={"Lactose free"}
                    value={isLactoseFree}
                    onChange={(value) => {
                        setIsLactoseFree(value);
                    }}
                ></Filter>
            </View>
        </View>
    );
};

export default FilterScreen;

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        alignItems: "center",
    },
    title: {
        fontFamily: "open-sans-regular",
        fontSize: 22,
        marginVertical: 10,
    },
    filtersContainer: {
        width: "100%",
        alignItems: "center",
    },
    filter: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        width: "70%",
    },
    filterLabel: {
        fontFamily: "open-sans-regular",
        fontSize: 16,
    },
});
