
import css from './App.module.css'
import React, { useState, useEffect } from "react";
// import objects from '../../../tasks.json';
import ContactForm from "../ContactForm/ContactForm"
import SearchBox from "../SearchBox/SearchBox"
import ContactList from "../ContactList/ContactList"
import { selectContact } from '../redux/contactsSlice'
import { selecFilter } from '../redux/filtersSlice'
import { useSelector } from 'react-redux';

export default function App() {
  // const items = useSelector((state) => state.locale.items); // приклад до спрощення
  const items = useSelector(selectContact); // повертає шматок стану зі слайсу (selectContact = функція стану)
  const name = useSelector(selecFilter); // повертає шматок стану зі слайсу


  // const [filter, setFilter] = useState('');
  // const [tasks, setTasks] = useState(() => {
  //   const savClicks = window.localStorage.getItem("my-clicks");
  //   return savClicks !== null ? JSON.parse(savClicks) : objects
  // });

  // useEffect(() => {
  //   const isLocalStorData = Boolean(localStorage.getItem("my-clicks"));
  //   if (isLocalStorData) {
  //     const data = localStorage.getItem("my-clicks");
  //     setTasks(JSON.parse(data));
  //   }
  // }, []);

  // useEffect(() => {
  //   window.localStorage.setItem("my-clicks", JSON.stringify(tasks));
  // }, [tasks]);

  // const addTask = (newTask) => {
  //   setTasks((prevTasks) => {
  //     return [...prevTasks, newTask];
  //   });
  // };
  // const deleteTask = (taskId) => {
  //   setTasks((prevTasks) => {
  //     return prevTasks.filter((task) => task.id !== taskId);
  //   });
  // };
  // const visibleTasks = tasks.filter((task) =>
  //   task.name.toLowerCase().includes(filter.toLowerCase()));

  return (
    <div className={css.container}>
      <>
        <h1 className={css.title}>Phonebook</h1>
        <ContactForm />
        <SearchBox />
        <ContactList />
        {/* <ContactForm onAdd={addTask} />
        <SearchBox value={filter} onFilter={setFilter} />
        <ContactList tasks={tasks} objects={objects} onDelete={deleteTask} /> */}

      </>
    </div>
  )
}

