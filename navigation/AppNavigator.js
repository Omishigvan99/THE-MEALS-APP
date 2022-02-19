import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import MealCategoriesScreen from "../screens/MealCategoriesScreen";
import CategoryScreen from "../screens/CategoryScreen";
import MealDetailsScreen from "../screens/MealDetailsScreen";
import { Platform } from "react-native";
import { colors } from "../constants/colors";

let StackNavigator = createStackNavigator(
    {
        MealCategories: {
            screen: MealCategoriesScreen,
            navigationOptions: {
                headerTitle: "Meal Categories",
            },
        },
        Category: CategoryScreen,
        MealDetails: MealDetailsScreen,
    },
    {
        defaultNavigationOptions: {
            headerStyle: {
                backgroundColor:
                    Platform.OS === "android" ? colors.primaryColor : "#FFFFFF",
            },
            headerTitleStyle: {
                fontFamily: "pacifico",
            },
            headerTintColor:
                Platform.OS === "android" ? "#FFFFFF" : colors.primaryColor,
        },
    }
);

export default createAppContainer(StackNavigator);
