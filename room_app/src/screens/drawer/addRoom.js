import React from "react";
import {StyleSheet, Text, SafeAreaView, TextInput, Button } from "react-native";
import { Formik } from "formik";
import * as Yup from "yup";
import styles from "./addRoom_styles";
import validationSchema from "./addRoom_valid";

const addRoom = () => {
    const validationSchema = Yup.object({
        room_name: Yup.string().max(200, 'Must be less 200 characters').min(3, 'Must be at least 3 characters').required('Required'),
        description: Yup.string().max(400, 'Must be less than 400 characters').min(3, 'Must be at least 3 characters'),
    })
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