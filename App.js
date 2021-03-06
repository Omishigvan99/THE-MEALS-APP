import { StatusBar } from "expo-status-bar";
import "react-native-gesture-handler";
import { StyleSheet, Text, View } from "react-native";
import { useFonts } from "expo-font";
import AppLoading from "expo-app-loading";
import AppNavigator from "./navigation/AppNavigator";
import { enableScreens } from "react-native-screens";
import { createStore, combineReducers } from "redux";
import mealsReducer from "./store/reducer";
import { Provider } from "react-redux";

enableScreens(); //for better native performance

let rootReducer = combineReducers({
    meals: mealsReducer,
});
let store = createStore(rootReducer);

export default function App() {
    let [loading] = useFonts({
        "open-sans-regular": require("./assets/fonts/Open_Sans/static/OpenSans/OpenSans-Regular.ttf"),
        "open-sans-bold": require("./assets/fonts/Open_Sans/static/OpenSans/OpenSans-Bold.ttf"),
        "open-sans-italic": require("./assets/fonts/Open_Sans/static/OpenSans/OpenSans-Italic.ttf"),
        pacifico: require("./assets/fonts/Pacifico/Pacifico-Regular.ttf"),
        "architects-daughter": require("./assets/fonts/Architects_Daughter/ArchitectsDaughter-Regular.ttf"),
    });

    if (!loading) {
        return <AppLoading></AppLoading>;
    }
    return (
        <Provider store={store}>
            <AppNavigator></AppNavigator>
        </Provider>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },
});
