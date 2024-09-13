import css from "./SearchBox.module.css"
// 1. Імпортуємо хук
import { useDispatch, useSelector } from "react-redux";
import { changeFilter, selectNameFilter } from '../redux/filtersSlice'

const MyComponent = () => {
    // 2. Отримуємо посилання на функцію відправки екшенів
    const dispatch = useDispatch();
    const filters = useSelector();
};


export default function SearchBox({ value, onFilter }) {
    return (
        <div className={css.item}>
            <h5 className={css.paragraf}>Finde contacts by name</h5>
            <input
                type="text"
                value={value}
                onChange={(e) => onFilter(e.target.value)}
            />
        </div>
    );
}


