import React from "react";
import {ScrollView, Text, SafeAreaView, TextInput, Image, Button } from "react-native";
import { Formik } from "formik";
import styles from "./addRoom_styles";
import validationSchema from "./addRoom_valid";

const addRoom = () => {
    const handleSubmit = async (values) => {
        const data = new FormData();
        data.append("room_name", values.room_name);
        data.append("description", values.description);
        data.append("width", values.width);
        data.append("length", values.length);
        
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
                        <Image
                            style={styles.image}
                            source={{ uri: "https://is1-ssl.mzstatic.com/image/thumb/Purple123/v4/0f/dc/92/0fdc92e4-fbbb-342c-b748-1dae7af44f09/source/256x256bb.jpg"}}
                        />
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