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
                        <TextInput
                            style={styles.textBox}
                            value={values.width}
                            type="text"
                            placeholder="Width of room"
                            onChangeText={handleChange("width")}
                        />
                        <Text style={styles.error}>{errors.width}</Text>
                        <TextInput
                            style={styles.textBox}
                            value={values.length}
                            placeholder="Length of room"
                            onChangeText={handleChange("length")}
                        />
                        <Text style={styles.error}>{errors.length}</Text>
                        <Button style={styles.addButton} onPress={handleSubmit} title="Submit" />
                    </>
                )}
            </Formik>
        </SafeAreaView>
    );
};

export default addRoom;