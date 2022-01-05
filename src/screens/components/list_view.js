import React, { Component } from "react";
import {StyleSheet, Text, Button, SafeAreaView, Image, FlatList } from "react-native";
import client from "./../../api/dungeon";

class ListView extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
        };
    }

    componentDidMount() {
        client.get("/").then((response) => {
            this.setState({ data: response.data });
        });
    }

    render() {
        const { data } = this.state;
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
                    renderItem={({ item }) => (
                        <Text style={styles.itemText}>
                            {item.room_name}: {item.description}
                        </Text>
                    )}
                />
                <Button
                    title="Room! Click for Details"
                    onPress={() => this.props.navigation.navigate("Detail")}
                />
            </SafeAreaView>
        );
    }
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
    itemText: {
        color: "green",
        fontSize: 20,
    }
});

export default ListView;