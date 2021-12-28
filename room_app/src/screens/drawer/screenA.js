import React, { useState } from "react";
import {StyleSheet, Image, SafeAreaView, TextInput, Text } from "react-native";

const ScreenA = () => {
    const [room, setRoom] = useState(" ");
    return (
        <SafeAreaView>
            <Text
                style={{
                    marginTop: 100,
                    fontSize: 40,
                    color: "red",
                    textAlign: "center",
                }}
            >
                {room}
            </Text>
            <TextInput
                style={styles.textBox}
                autoCapitalize="words"
                autoCorrect={false}
                placeholder="Character Name"
                onChangeText={(text) => setRoom(text)}
            />
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    textBox: {
        marginTop: 200,
        height: 40,
        borderColor: "gray",
        borderWidth: 1,
        marginRight: 20,
        marginLeft: 20,
    },
});

export default ScreenA;