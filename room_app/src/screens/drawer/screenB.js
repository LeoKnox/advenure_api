import React, { useEffect, useState } from "react";
import {StyleSheet, View, Text } from "react-native";
import * as ImagePicker from "expo-image-picker";

const ScreenB = () => {
    const getPermission = async () => {
        if (status !== "granted") {
            alert("Enable camera roll permissions");
        }
    };

    useEffect(() => {
        getPermission();
    }, []);

    return (
        <View style={styles.center}>
            <Text style={styles.title}>Screen B</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    center: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    title: {
        fontSize: 36,
        marginBottom: 16,
    },
});

export default ScreenB;