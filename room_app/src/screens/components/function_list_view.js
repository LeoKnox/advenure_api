import React, { useState, useEffect } from "react";
import { StyleSheet, SafeAreaView, Text, Image, FlatList, TouchableOpacity } from "react-native";
import client from "./../../api/dungeon";
import Card from "./shared/card";

const ListView = ({ navigation }) => {
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
        <SafeAreaView>
            <View style={styles.container}>
                <FlatList
                    data={data}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={({ item }) => {
                        return (
                            <TouchableOpacity
                                onPress={() => {
                                    navigation.navigate("Detail", {objurl: item.absolute, this_room: "dark and dangerous",});
                                }}
                            >
                                <Card
                                    logo={item.logo_image}
                                    title={item.room_name}
                                    details={item.description}
                                />
                            </TouchableOpacity>
                        );
                    }}
                />
            </View>
        </SafeAreaView>
    );
};


const styles = StyleSheet.create({
    container: {
        backgroundColor: "#eeeeee",
        padding: 20,
    },
});

export default ListView;