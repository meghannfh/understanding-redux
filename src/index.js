import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { configureStore } from '@reduxjs/toolkit'
import { Provider } from 'react-redux'
import userSlice from './features/userSlice';
import themeSlice from './features/themeSlice';

//inside the store you can create your list of reducers
const store = configureStore({
  //reducer is a function that takes in some information about
  //the previous value of the current state and the action
  //you want to perform with that state and returns a new state 
  reducer: {
    user: userSlice,
    theme: themeSlice,
  },
})

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
