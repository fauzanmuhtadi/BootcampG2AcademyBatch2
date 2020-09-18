import React, { Component } from 'react';
import IndexApp from './IndexApp';
import { Provider } from "react-redux";
// import { createStore } from "redux";
// import AllReducers from "./components/reducers";

import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from "./components/store/store";

// const store = createStore(AllReducers)

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }

  render() { 
    return ( 
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <IndexApp />
        </PersistGate>
      </Provider>
    );
  }
}
 
export default App;