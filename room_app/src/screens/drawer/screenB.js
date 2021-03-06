import React, { useEffect, useState } from "react";
import {StyleSheet, View, Text, Button } from "react-native";
import * as ImagePicker from "expo-image-picker";

const ScreenB = () => {
    const [photo, setPhoto] = useState();
    
    const getPermission = async () => {
        const { status } = await ImagePicker.requestCameraRollPermissionsAsync();
        if (status !== "granted") {
            alert("Enable camera roll permissions");
        }
    };

    useEffect(() => {
        getPermission();
    }, []);

    const selectPhoto = async () => {
        try {
            const result = await ImagePicker.launchImageLibraryAsync();
            if (!result.cancelled) setPhoto(result.uri);
        } catch (error) {
            alert("Error, try again");
        }
    };

    return (
        <View style={styles.center}>
            <Text style={styles.title}>Screen B</Text>
            <Button title="Get Image" onPress={selectPhoto} />
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
    photo: {
        width: 400,
        height: 400,
    },
});

export default ScreenB;