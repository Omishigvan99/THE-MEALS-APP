import {
    StyleSheet,
    Text,
    View,
    ImageBackground,
    TouchableOpacity,
} from "react-native";
import React from "react";

const MealCard = ({
    affordability,
    complexity,
    duration,
    title,
    imageUrl,
    onPress,
}) => {
    return (
        <TouchableOpacity activeOpacity={0.7} onPress={onPress}>
            <View style={styles.cardContainer}>
                <View style={styles.cardTopContainer}>
                    <ImageBackground
                        source={{ uri: imageUrl }}
                        style={styles.cardBgImage}
                    >
                        <View style={styles.mealTitleContainer}>
                            <Text style={styles.mealTitle} numberOfLines={1}>
                                {title}
                            </Text>
                        </View>
                    </ImageBackground>
                </View>
                <View style={styles.cardBottomContainer}>
                    <Text style={styles.additionInfo}>{duration + " min"}</Text>
                    <Text style={styles.additionInfo}>
                        {complexity.toUpperCase()}
                    </Text>
                    <Text style={styles.additionInfo}>
                        {affordability.toUpperCase()}
                    </Text>
                </View>
            </View>
        </TouchableOpacity>
    );
};

export default MealCard;

const styles = StyleSheet.create({
    cardContainer: {
        height: 250,
        backgroundColor: "#DDD",
        borderRadius: 10,
        overflow: "hidden",
        marginBottom: 10,
    },
    cardTopContainer: {
        height: "80%",
    },
    cardBottomContainer: {
        flexDirection: "row",
        justifyContent: "space-evenly",
        alignItems: "center",
        height: "20%",
    },
    cardBgImage: {
        justifyContent: "flex-end",
        height: "100%",
        width: "100%",
    },
    mealTitleContainer: {
        padding: 5,
        backgroundColor: "rgba(0,0,0,0.5)",
    },
    mealTitle: {
        fontFamily: "architects-daughter",
        fontSize: 20,
        color: "white",
    },
    additionInfo: {
        fontFamily: "architects-daughter",
    },
});
