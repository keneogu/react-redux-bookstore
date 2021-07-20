import React from 'react';
import ReactDOM from 'react-dom';
import { v4 as uuid } from 'uuid';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import App from './components/App';
import rootReducer from './reducers';

const initialState = {
  books: [
    {
      bookId: uuid(),
      title: 'Mini habits',
      category: 'History',
    },
    {
      bookId: uuid(),
      title: 'Deep work',
      category: 'Biography',
    },
    {
      bookId: uuid(),
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
