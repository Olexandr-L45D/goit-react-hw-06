import css from "./Contact.module.css"
import { BsFillPersonFill } from "react-icons/bs";
import { AiFillPhone } from "react-icons/ai";
// 1. Імпортуємо хук
import { useDispatch, useSelector } from "react-redux";
import { deleteContact } from '../redux/contactsSlice'

const MyComponent = () => {
    // 2. Отримуємо посилання на функцію відправки екшенів
    const dispatch = useDispatch();
    const items = useSelector((state) => state.locale.items);
};

export default function Contact({ obj: { id, name, number }, onDelete }) {
    return (
        <div className={css.item}>
            <div className={css.itemText}>
                <p className={css.text}><BsFillPersonFill />{name}</p>
                <p className={css.text}><AiFillPhone />{number}</p>
            </div>
            <button className={css.btn} onClick={() => onDelete(id)}>
                Delete
            </button>
        </div>
    );
}