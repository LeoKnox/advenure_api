import React from "react";
import {StyleSheet, Image, SafeAreaView, TextInput, Button } from "react-native";
import { Formik } from "formik";
import * as Yup from "yup";

const ScreenA = () => {
    return (
        <SafeAreaView>
            <Formik
                values={{ room_name: "", description: "" }}
                onSubmit={(values) => {
                    alert(JSON.stringify(values, null, 2));
                }}
            >
                {({ handleChange, handleSubmit, values }) => (
                    <>
                        <TextInput
                            syle={styles.textBox}
                            value={values.room_name}
                            type="text"
                            placeholder="Enter Room Name"
                            onChangeText={handleChange("room_name")}
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