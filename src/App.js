import React from 'react';
import './App.css';
import { Provider } from 'react-redux';
import store from './store';
import { ItemListView } from './views'

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <ItemListView />
      </div>
    </Provider>
  );
}

export default App;
