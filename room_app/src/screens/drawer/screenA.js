import React from "react";
import {StyleSheet, Image, SafeAreaView, TextInput, Text } from "react-native";
import { Formik } from "formik";
import * as Yup from "yup";

const ScreenA = () => {
    return (
        <SafeAreaView>
            <Formik
                intitialValues={{ room: "", description: "" }}
                onSubmit={(values) => {
                    alert(JSON.stringify(values, null, 2));
                }}
            >
                {({ handleChange, handleSubmit, values }) => (
                    <>
                        <TextInput
                            syle={styles.textBox}
                            value={values.room}
                            type="text"
                            placeholder="Enter Room Name"
                            onChangeText={handleChange("room")}
                        />
                        <TextInput
                            style={styles.textBox}
                            value={values.description}
                            placeholder="Room Description"
                            onChangeText={handleChange("description")}
                        />
                        <Button onPress={handleSubmit} title="Submit" />
                    </>
                )}
            </Formik>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    textBox: {
        marginTop: 50,
        height: 40,
        borderColor: "gray",
        borderWidth: 1,
        marginRight: 20,
        marginLeft: 20,
    },
});

export default ScreenA;