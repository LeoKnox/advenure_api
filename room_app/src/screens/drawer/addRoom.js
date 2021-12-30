import React from "react";
import {StyleSheet, Text, SafeAreaView, TextInput, Button } from "react-native";
import { Formik } from "formik";
import * as Yup from "yup";
import styles from "./addRoom_styles";
import validationSchema from "./addRoom_valid";

const addRoom = () => {
    return (
        <SafeAreaView>
            <Formik
                initialValues={{ room_name: "", description: "" }}
                onSubmit={(values) => {
                    alert(JSON.stringify(values, null, 2));
                }}
                validationSchema={validationSchema}
            >
                {({ handleChange, handleSubmit, values, errors }) => (
                    <>
                        <TextInput
                            style={styles.textBox}
                            value={values.room_name}
                            type="text"
                            placeholder="Enter Room Name"
                            onChangeText={handleChange("room_name")}
                        />
                        <Text style={styles.error}>{errors.room_name}</Text>
                        <TextInput
                            style={styles.textBox}
                            value={values.description}
                            placeholder="Room Description"
                            onChangeText={handleChange("description")}
                        />
                        <Text style={styles.error}>{errors.description}</Text>
                        <Button onPress={handleSubmit} title="Submit" />
                    </>
                )}
            </Formik>
        </SafeAreaView>
    );
};

export default addRoom;