import css from "./SearchBox.module.css"
// 1. Імпортуємо хук
import { useDispatch, useSelector } from "react-redux";
import { selecFilter, changeFilter, selectNameFilter } from '../redux/filtersSlice'
// const MyComponent = () => {
//     // 2. Отримуємо посилання на функцію відправки екшенів
//     const dispatch = useDispatch();
//     const name = useSelector(selecFilter);
// };
// export default function SearchBox({ value, onFilter })
export default function SearchBox({ value }) {
    const dispatch = useDispatch();
    const filter = useSelector((state) => state.filters.status);
    const name = useSelector(selecFilter);

    const handleFiltrChange = filter => dispatch(selecFilter(filter));

    const handleChange = (event) => {
        dispatch(changeFilter(event.target.value));
    };
    // const handleSelect = (event) => {
    //     dispatch(selectNameFilter(event.target.value));
    // };
    return (
        <div className={css.item}>
            <h5 className={css.paragraf}>Finde contacts by name</h5>
            <input
                type="text"
                value={value}
                onChange={handleChange}
            // onSelect={handleSelect}
            // onChange={(e) => onFilter(e.target.value)}
            />
            <button onClick={() => handleFiltrChange("active")}>Activ </button>
            <button onClick={() => handleFiltrChange("completed")}>Completed </button>
        </div>
    );
}


