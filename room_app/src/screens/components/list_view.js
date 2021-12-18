import React, { Component } from "react";
import {StyleSheet, Text, Button, SafeAreaView, Image } from "react-native";

class ListView extends Component {
    render() {
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
                <Text style={styles.title}>List of Rooms</Text>
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
});

export default ListView;