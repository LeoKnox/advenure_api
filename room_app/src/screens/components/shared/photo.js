import React, { useEffect } from "react";
import { View, StyleSheet, Image } from "react-native";
import * as ImagePicker from "expo-image-picker";
import { SimpleLineIcons } from "@expo/vector-icons";
import styles from "../../drawer/addRoom_styles";

const PhotoPicker = () => {
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
            if (!result.cancelled) selectPhoto(result.uri);
        } catch (error) {
            alert("Error, try again");
        }
    };

    return (
        <View style={styles.container}>
            {photo == "" ? (
                <SimpleLineIcons name="picture" size="100" color="black" />
            ) : (
                <Image style={styles.img} source={{ uri: photo }} />
            )}
        </View>
    );
};
export default PhotoPicker;