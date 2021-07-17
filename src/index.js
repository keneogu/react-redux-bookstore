import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import App from './components/App';
import rootReducer from './reducers';

const initialState = {
  books: [
    {
      bookId: Math.floor(Math.random() * 10),
      title: 'Mini habits',
      category: 'History',
    },
    {
      bookId: Math.floor(Math.random() * 10),
      title: 'Deep work',
      category: 'Biography',
    },
    {
      bookId: Math.floor(Math.random() * 10),
      title: 'Eat the frog',
      category: 'Learning',
    },
  ],
};

const store = createStore(rootReducer, initialState);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);
