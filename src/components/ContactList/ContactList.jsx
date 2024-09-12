import css from './ContactList.module.css';
import Contact from "../Contact/Contact"

export default function ContactList({ tasks, onDelete }) {
    return (
        <ul className={css.list}>
            {tasks.map((task) => (
                <li className={css.item} key={task.id} >
                    <Contact obj={task} onDelete={onDelete} />
                </li>
            ))}
        </ul>
    );
}


