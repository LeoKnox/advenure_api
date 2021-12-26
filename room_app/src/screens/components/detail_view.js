import React, { useState, useEffect } from "react";
import {View, Text, Image, FlatList } from "react-native";
import dungeon from "./../../api/dungeon"
import styles from "./detail_styles"

const DetailView = ({ navigation, route }) => {
    const [detail, setDetail] = useState("");
    const { objurl } = route.params;

    const getDetail = async (url) => {
        console.log(url);
        console.log(detail);
        try {
            const response = await dungeon.get(url);
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
            horizontal = {true}
                data={detail.room_images}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => {
                    return (
                        <Image
                            style={styles.roomImage}
                            source={{
                                uri: item.image,
                            }}
                        />
                    );
                }}
            />
            <Text style={styles.title}>Room: {detail.room_name}</Text>
            <Text style={styles.details}>{detail.description}</Text>
            <Text style={styles.details}>
                Width: {detail.width} : Length: {detail.length}
            </Text>
        </View>
    );
};

export default DetailView;