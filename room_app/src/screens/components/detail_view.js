import React, { useState, useEffect } from "react";
import {StyleSheet, View, Text, Image, FlatList } from "react-native";
import client from "./../../api/dungeon"

const DetailView = ({ navigation, route }) => {
    const [detail, setDetail] = useState("");
    const { objurl } = route.params;

    const getDetail = async (url) => {
        console.log(url);
        try {
            const response = await client.get(url);
            if (!response.ok) {
                console.log(response);
                setDetail(response.data);
            }
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        getDetail(objurl);
    }, []);

    return (
        <View style={styles.center}>
            <FlatList
                data={detail.room_image}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => {
                    return (
                        <Image
                            style={styles.roomImage}
                            source={{
                                uri: item.room_images[0].image,
                            }}
                        />
                    );
                }}
            />
            <Text style={styles.title}>Room: {detail.room_name}</Text>
            <Text style={styles.title}>Description: {detail.description}</Text>
            <Text style={styles.Title}>
                Width: {detail.width} : Length: {detail.length}
            </Text>
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
    roomImage: {
        width: 200,
        height: 200,
        marginBottom: 16,
    }
});

export default DetailView;