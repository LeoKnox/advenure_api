import React, { useEffect } from "react";
import { view, StyleSheet, Image } from "react-native";
import * as ImagePicker from "expo-image-picker";
import { SimpleLineIcons } from "@expo/vector-icons";
import styles from "../../drawer/addRoom_styles";

const PhotoPicker = () => {
    const getPermission = async () => {
        const { status } = await ImagePicker.requestCameraRollPermissionAsny();
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

const styles = StyleSheet.create({
    container: {
        alignItems:"center",
        backgroundColor: "white"
    },
    img: {
        width: 100,
        height: 100,
        marginTop: 20,
        marginBotom: 20,
        overflow: "hidden",
        borderRadius: 10,
    },
})

export default PhotoPicker;