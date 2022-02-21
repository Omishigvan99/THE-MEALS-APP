import { StyleSheet, Platform } from "react-native";
import React from "react";
import { HeaderButton } from "react-navigation-header-buttons";
import { MaterialIcons } from "@expo/vector-icons";
import { colors } from "../constants/colors";

const CustomHeaderButton = (props) => {
    return (
        <HeaderButton
            {...props}
            IconComponent={MaterialIcons}
            iconSize={24}
            color={Platform.OS === "ios" ? colors.primaryColor : "#FFF"}
            
        ></HeaderButton>
    );
};

export default CustomHeaderButton;

const styles = StyleSheet.create({});
