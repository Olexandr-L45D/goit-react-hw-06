import { nanoid } from 'nanoid'
import css from "./ContactForm.module.css"
import { Formik, Form, Field } from 'formik';
import { useId } from "react";
import * as Yup from "yup";
import { ErrorMessage } from "formik";
// 1. Імпортуємо хук
import { useDispatch, useSelector } from "react-redux";
import { addContact } from '../redux/contactsSlice'

const MyComponent = () => {
    // 2. Отримуємо посилання на функцію відправки екшенів
    const dispatch = useDispatch();
    const items = useSelector((state) => state.locale.items);
};

export default function ContactForm({ onAdd }) {
    const nameFieldId = useId();
    const numberFieldId = useId();
    const idId = nanoid();

    const FeedbackSchema = Yup.object().shape({
        name: Yup.string().min(4, "Too Short!").max(50, "Too Long!").required("Required"),
        number: Yup.string().min(4, "Too Short!").max(50, "Too Long!").required('Required')
    });

    const handleSubmit = (event, values, actions) => {
        values.id = idId;
        //додав з діспатч функцію додавання
        dispatch(addContact(event.target.value))
        // onAdd(values);
        // console.log(values);
        actions.resetForm();
    };
    return (
        <div className={css.item}>
            <Formik initialValues={{
                name: " ",
                number: " "
            }} onSubmit={handleSubmit} validationSchema={FeedbackSchema}>
                <Form>
                    <div className={css.items}>
                        <label className={css.label} htmlFor={nameFieldId} >Name</label>
                        <Field className={css.inp} type="text" name="name" id={nameFieldId} />
                        <ErrorMessage className={css.messag} name="name" component="span" />
                    </div>
                    <div className={css.items}>
                        <label className={css.label} htmlFor={numberFieldId} >Number</label>
                        <Field className={css.inp} type="text" name="number" id={numberFieldId} />
                        <ErrorMessage className={css.messag} name="number" component="span" />
                    </div>
                    <div className={css.btn}>
                        <button className={css.addContact} type="submit">Add contact</button>
                    </div>
                </Form>
            </Formik>
        </div>
    );
};

