import * as Yup from "yup";

const validationSchema = Yup.object({
    room_name: Yup.string()
        .max(200, 'Must be less 200 characters')
        .min(3, 'Must be at least 3 characters')
        .required('Required'),
    description: Yup.string()
        .max(400, 'Must be less than 400 characters')
        .min(3, 'Must be at least 3 characters'),
    length: Yup.string()
        .max(4, "Cannot be longer then 4 digits")
        .min(1, "Must be at least 1 digit"),
    width: Yup.string()
        .max(4, "Cannot be longer then 4 digits")
        .min(1, "Must be at least 1 digit"),
})