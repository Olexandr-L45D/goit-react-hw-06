import css from "./Contact.module.css"
import { BsFillPersonFill } from "react-icons/bs";
import { AiFillPhone } from "react-icons/ai";
// 1. Імпортуємо хук
import { useDispatch, useSelector } from "react-redux";
import { deleteContact, selectContact } from '../redux/contactsSlice'

// const MyComponent = () => {
//     // 2. Отримуємо посилання на функцію відправки екшенів
//     const dispatch = useDispatch();
//     // 3. Функція селектор стану (належить слайсу тому що отримує частинку слайсу)
//     const items = useSelector(selectContact);
// };

// export default function Contact({ obj: { id, name, number }, onDelete })
export default function Contact({ task }) {
    const dispatch = useDispatch();
    const items = useSelector(selectContact);

    const handleDelete = () => {
        dispatch(deleteContact(task.id))
    }

    return (
        <div className={css.item}>
            <input type="checkbox" />
            <p>{task.name}</p>
            <div className={css.itemText}>
                <p className={css.text}><BsFillPersonFill />{task.name}</p>
                <p className={css.text}><AiFillPhone />{task.number}</p>
            </div>
            <button className={css.btn} onClick={handleDelete}>
                Delete
            </button>
            {/* <button className={css.btn} onClick={() => onDelete(id)}>
                Delete
            </button> */}
        </div>
    );
}