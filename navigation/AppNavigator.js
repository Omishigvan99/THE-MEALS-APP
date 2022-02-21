import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MealCategoriesScreen from "../screens/MealCategoriesScreen";
import CategoryScreen from "../screens/CategoryScreen";
import MealDetialsScreen from "../screens/MealDetailsScreen";
import { colors } from "../constants/colors";
import { Platform, Image } from "react-native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import CustomHeaderButton from "../components/CustomHeaderButton";

const Stack = createNativeStackNavigator();
// logo component to add to screen header
// function LogoTitle() {
//     return (
//         <Image
//             style={{ width: 100, height: 50 }}
//             source={require("../assets/icon.png")}
//         />
//     );
// }

const AppNavigator = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={{
                    headerStyle: {
                        backgroundColor:
                            Platform.OS === "android"
                                ? colors.primaryColor
                                : "#FFF",
                    },
                    headerTintColor:
                        Platform.OS === "android"
                            ? "#FFF"
                            : colors.primaryColor,
                    headerTitleStyle: {
                        fontFamily: "pacifico",
                    },
                }}
            >
                <Stack.Screen
                    name="Meal Categories"
                    component={MealCategoriesScreen}
                ></Stack.Screen>
                <Stack.Screen
                    name="Category Meals"
                    component={CategoryScreen}
                    options={({ route }) => ({
                        title: route.params.categoryName,
                    })}
                ></Stack.Screen>
                <Stack.Screen
                    name="Meal Details"
                    component={MealDetialsScreen}
                    // you could also add icon as header
                    // options={{
                    //     headerTitle: (props) => (
                    //         <LogoTitle {...props}></LogoTitle>
                    //     ),
                    // }}
                    options={({ route }) => ({
                        title: route.params.mealTitle,
                        headerRight: () => (
                            <HeaderButtons
                                HeaderButtonComponent={CustomHeaderButton}
                            >
                                <Item
                                    title="fav"
                                    iconName="favorite"
                                    onPress={() => {
                                        console.log("Favorite got clicked");
                                    }}
                                ></Item>
                            </HeaderButtons>
                        ),
                    })}
                ></Stack.Screen>
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default AppNavigator;
