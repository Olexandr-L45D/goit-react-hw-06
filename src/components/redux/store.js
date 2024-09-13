import { configureStore } from '@reduxjs/toolkit';
// export const store = configureStore({});

// const initialState = {
//     tasks: {
//         items: [
//             { id: 0, text: 'Learn HTML and CSS', completed: true },
//             { id: 1, text: 'Get good at JavaScript', completed: true },
//             { id: 2, text: 'Master React', completed: false },
//             { id: 3, text: 'Discover Redux', completed: false },
//             { id: 4, text: 'Build amazing apps', completed: false },
//         ],
//     },
//     filters: {
//         status: 'all',
//         loading: false,
//         error: null
//     },
//     user: {
//         email: 'email',
//         loading: false,
//         error: null
//     },
// };

// переніс обєкти властивостей прямо в аргумент початкового стану функцій в круглих дужках, тому initialState вже не потрібен при рефакторингу
// const initialState = {
//     contacts: {
//         items: []
//     },
//     filters: {
//         name: ""
//     }
// }

// const createSlice = (state = initialState.contacts, action) => {
const createSlice = (state = { items: [] }, action) => {
    switch (action.type) {
        case 'tasks/addContact':
            return {
                ...state,
                items: state.items + action.payload
            }
        case 'tasks/deleteContact':
            return {
                ...state,
                items: state.items.filter((task) => task.id !== action.payload),

            };

        case 'tasks/toggleCompleted':
            return {
                ...state,
                items: state.items.map((task) => {
                    if (task.id !== action.payload) {
                        return task;
                    }
                    return {
                        ...task,
                        completed: !task.completed,
                    };
                }),
            };

        default:
            return state;
    }
}

// const filterReducer = (state = initialState.filters, action) => {
const filterReducer = (state = { name: "" }, action) => {
    switch (action.type) {
        case 'filters/setStatusFilter':
            return {
                ...state,
                name: state.name + action.payload,
            };
        default:
            return state;
    }
}


export const store = configureStore({
    reducer: {
        contacts: createSlice,
        filters: filterReducer,
    }
    // reducer: rootReducer,
});

// це був загальний редусер (нижче)
// const rootReducer = (state = initialState, action) => {
//     switch (action.type) {
//         case 'tasks/addTask': {
//             return {
//                 ...state,
//                 tasks: {
//                     items: [...state.tasks.items, action.payload],
//                 },
//             };
//         }

//         case 'tasks/deleteTask':
//             return {
//                 ...state,
//                 tasks: {
//                     items: state.tasks.items.filter((task) => task.id !== action.payload),
//                 },
//             };

//         case 'tasks/toggleCompleted':
//             return {
//                 ...state,
//                 tasks: {
//                     items: state.tasks.items.map((task) => {
//                         if (task.id !== action.payload) {
//                             return task;
//                         }
//                         return {
//                             ...task,
//                             completed: !task.completed,
//                         };
//                     }),
//                 },
//             };

//         case 'filters/setStatusFilter':
//             return {
//                 ...state,
//                 filters: {
//                     status: action.payload,
//                 },
//             };

//         default:
//             return state;
//     }
// };
