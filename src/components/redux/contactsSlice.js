// contactsSlice.js
import { createSlice } from '@reduxjs/toolkit';

const slice = createSlice({
    name: "contacts",
    initialState: { items: [] },
    reducers: {
        addContact: (state, action) => {
            state.items.push(action.payload);
            // return {
            //     ...state,
            //     items: state.items + action.payload
            // }
        },
        deleteContact: (state, action) => {
            state.items -= action.payload;
            // return {
            //     ...state,
            //     items: state.items.filter((task) => task.id !== action.payload),
            // };
        },

        //     selectContacts: (state, action) => {
        //         return {
        //             ...state,
        //             items: state.items.map((task) => {
        //                 if (task.id !== action.payload) {
        //                     return task;
        //                 }
        //                 return {
        //                     ...task,
        //                     completed: !task.completed,
        //                 };
        //             }),

        //         },

        // },

    },
});
// створюємо фабрики екшкнів автоматично (нижче slice.actions.....)
// slice.actions.addContact();
// slice.actions.deleteContact();
// slice.actions.selectContacts();
export const { addContact, deleteContact, selectContacts } = slice.actions;
// кореневий редюсер (або редюсер слайсу за дефолтом)
export default slice.reducer;
// console.log(slice.reducer);
// export { createSlice };




//  НИЖЧЕ приклад детального створення без БІБЛІОТЕК!
// у властивості case-reducer оголошуем маленькі редюсери для окремих екшенів
// export const addContact = createAction('contacts/addContact');
// export const deleteContact = createAction('contacts/deleteContact');
// export const selectContacts = createAction('contacts/selectContacts');
// // це зверху ми переносимо 3 екшина для contactsSlice.js і нижче його Редюсер createSlice (тобто прибираємо з загального файлу)

// export default function createSlice(state = { items: [] }, action) {
//     switch (action.type) {
//         case 'contacts/addContact':
//             return {
//                 ...state,
//                 items: state.items + action.payload
//             }
//         case 'contacts/deleteContact':
//             return {
//                 ...state,
//                 items: state.items.filter((task) => task.id !== action.payload),
//             };

//         case 'contacts/selectContacts':
//             return {
//                 ...state,
//                 items: state.items.map((task) => {
//                     if (task.id !== action.payload) {
//                         return task;
//                     }
//                     return {
//                         ...task,
//                         completed: !task.completed,
//                     };
//                 }),
//             };

//         default:
//             return state;
//     }
// }