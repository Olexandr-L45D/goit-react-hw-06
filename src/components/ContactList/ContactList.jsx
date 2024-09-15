import css from './ContactList.module.css';
import Contact from "../Contact/Contact"

const getVisiblContact = (contacts, selectNameFilter) => {
    switch (selectNameFilter) {
        case 'active': return contacts.filter((contact) => !contact.completed);
        case 'completed': return contacts.filter((contact) => contact.completed);
        default: return contacts;
    }
}
// export default function ContactList({ tasks, onDelete })
export default function ContactList() {
    const contacts = useSelector((state) => state.contacts.items);
    const selectNameFilter = useSelector((state) => state.filters.status);
    const visibleTasks = getVisiblContact(contacts, selectNameFilter);

    // const contacts = [];
    return (
        <ul className={css.list}>
            {visibleTasks.map((contact) => (
                <li className={css.item} key={contact.id} >
                    <Contact contact={contact} />
                    {/* <Contact obj={task} onDelete={onDelete} /> */}
                </li>
            ))}
        </ul>
    );
}









// // 2. Отримуємо масив завдань із стану Redux
// const contacts = useSelector((state) => state.contacts.items);
// // 3. Отримуємо значення фільтра із стану Redux
// const selectNameFilter = useSelector((state) => state.filters.status);
// // 4. Обчислюємо масив завдань, які необхідно відображати в інтерфейсі
// const visibleTasks = getVisiblContact(contacts, selectNameFilter);

