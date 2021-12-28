import React, { Component } from "react";
import {StyleSheet, Image, SafeAreaView, TextInput, Text } from "react-native";

const ScreenA = () => {
    return (
        <SafeAreaView>
            <TextInput
                style={styles.textBox}
                autoCapitalize="words"
                autoCorrect={false}
                placeholder="Character Name"
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