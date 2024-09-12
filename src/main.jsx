
import React from 'react';
import ReactDOM from 'react-dom/client';
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from './components/App/App';
// 1. Імпортуємо провайдер
import { Provider } from 'react-redux'
// 2. Імпортуємо створений раніше стор
import { store } from "./components/redux/store";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
