import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import MealCategoriesScreen from "../screens/MealCategoriesScreen";
import CategoryScreen from "../screens/CategoryScreen";
import MealDetailsScreen from "../screens/MealDetailsScreen";
import FavouriteMealsScreen from "../screens/FavouriteMealsScreen";
import { colors } from "../constants/colors";
import { Platform, Image } from "react-native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import CustomHeaderButton from "../components/CustomHeaderButton";
import { MaterialIcons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

// logo component to add to screen header
// function LogoTitle() {
//     return (
//         <Image
//             style={{ width: 100, height: 50 }}
//             source={require("../assets/icon.png")}
//         />
//     );
// }

let StackNavigator = () => (
    <Stack.Navigator
        screenOptions={{
            headerStyle: {
                backgroundColor:
                    Platform.OS === "android" ? colors.primaryColor : "#FFF",
            },
            headerTintColor:
                Platform.OS === "android" ? "#FFF" : colors.primaryColor,
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
            component={MealDetailsScreen}
            // you could also add icon as header
            // options={{
            //     headerTitle: (props) => (
            //         <LogoTitle {...props}></LogoTitle>
            //     ),
            // }}
            options={({ route }) => ({
                title: route.params.mealTitle,
                headerRight: () => (
                    <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
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
);

let FavoriteStackNavigator = () => {
    return (
        <Stack.Navigator
            screenOptions={{
                headerStyle: {
                    backgroundColor:
                        Platform.OS === "android"
                            ? colors.primaryColor
                            : "#FFF",
                },
                headerTintColor:
                    Platform.OS === "android" ? "#FFF" : colors.primaryColor,
                headerTitleStyle: {
                    fontFamily: "pacifico",
                },
            }}
        >
            <Stack.Screen
                name="Favorite"
                component={FavouriteMealsScreen}
            ></Stack.Screen>
            <Stack.Screen
                name="Meal Details"
                component={MealDetailsScreen}
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
    );
};

const AppNavigator = () => {
    return (
        <NavigationContainer>
            <Tab.Navigator
                screenOptions={{
                    headerShown: false,
                    tabBarActiveTintColor: colors.primaryColor,
                    tabBarLabelStyle: {
                        fontFamily: "open-sans-regular",
                        marginBottom: 3,
                        fontSize: 12,
                    },
                }}
            >
                <Tab.Screen
                    name="Meals"
                    component={StackNavigator}
                    options={{
                        tabBarIcon: ({ color, size }) => (
                            <MaterialIcons
                                name="restaurant"
                                size={size}
                                color={color}
                            />
                        ),
                    }}
                ></Tab.Screen>
                <Tab.Screen
                    name="Favorites"
                    component={FavoriteStackNavigator}
                    options={{
                        tabBarIcon: ({ color, size }) => (
                            <MaterialIcons
                                name="favorite"
                                size={size}
                                color={color}
                            ></MaterialIcons>
                        ),
                        headerStyle: {
                            backgroundColor: colors.primaryColor,
                        },
                        headerTintColor:
                            Platform.OS === "ios"
                                ? colors.primaryColor
                                : "#fff",
                        headerTitleStyle: {
                            fontFamily: "pacifico",
                        },
                    }}
                ></Tab.Screen>
            </Tab.Navigator>
        </NavigationContainer>
    );
};

export default AppNavigator;
