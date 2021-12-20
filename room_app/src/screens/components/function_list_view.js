import React, { useState, useEffect } from "react";
import { StyleSheet, SafeAreaView, Text, Image, FlatList, TouchableOpacity } from "react-native";
import client from "./../../api/dungeon";

const ListView = ({ naviagtion }) => {
    const [data, setData] = useState([]);

    const getList = async () => {
        const response = await client.get("/");
        setData(response.data);
    };

    useEffect(() => {
        getList();
    }, []);

    const mytext = "Go Create Rooms!";
    return (
        <SafeAreaView style={styles.center}>
            <Image
                style={styles.torchImage}
                source={{
                url: "https://opengameart.org/sites/default/files/Torch_Gif.gif",
                }}
            />
            <Text style={styles.baseText}>Room Builder App</Text>
            <Text style={styles.newText}>{mytext}</Text>
            <FlatList
                data={data}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => {
                    (
                        <TouchableOpacity
                            onPress={() => {
                                navigation.navigate("Detail", {objurl: item.absolute, hey: "spooky"});
                            }}
                            >
                            <Text style={styles.itemText}>
                                {item.room_name}: {item.description}
                            </Text>
                        </TouchableOpacity>
                    );
                }}
            />
        </SafeAreaView>
    );
}

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
    baseText: {
        color: "navy",
        fontSize: 30,
        fontStyle: "italic",
    },
    newText: {
        color: "red",
    },
    torchImage: {
        width:320,
        height: 320,
    },
})

export default ListView;