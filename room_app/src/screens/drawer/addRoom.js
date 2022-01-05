import React, { useState } from "react";
import {ScrollView, Text, SafeAreaView, TextInput, Image, Button } from "react-native";
import { Formik } from "formik";
import styles from "./addRoom_styles";
import validationSchema from "./addRoom_valid";
import client from "../../api/dungeon";
import PhotoPicker from "../components/shared/photo.js";

const addRoom = () => {
    const [photo, setPhoto] = useState("");
    const handleSubmit = async (values) => {
        const data = new FormData();
        data.append("room_name", values.room_name);
        data.append("description", values.description);
        data.append("width", values.width);
        data.append("length", values.length);
        data.append("tile", {
            uri: photo,
            name: "filename.jpg",
            type: "image/jpg",
        });

        client
            .post("/create/", data)
            .then(function(response) {
                console.log(response);
            })
            .catch(function (response) {
                console.log(response);
            });
    };
    return (
        <Formik
            initialValues={{ room_name: "", description: "", width: "", length: "", }}
            onSubmit={handleSubmit}
            validationSchema={validationSchema}
        >
            {({ handleChange, handleSubmit, values, errors }) => (
                <SafeAreaView style={styles.content}>
                    <ScrollView>
                        <PhotoPicker photo={photo} onPressPhoto={(uri) => setPhoto(uri)} />
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
                    </ScrollView>
                </SafeAreaView>
            )}
        </Formik>
    );
};

export default addRoom;