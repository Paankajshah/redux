import React from "react";
import { Provider } from 'react-redux'
import Cake from './components/CakeContainetr'
import store from './redux/store'
import "./styles.css";
import FakeCake from "./components/fakeCake";
import CakeHooks from "./components/HooksContainer";
import IceCreamContainer from './components/IceCreamContainer';
import UsersContainer from './components/UsersContainer'

export default function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <CakeHooks />
        <Cake />
        <FakeCake />
        <IceCreamContainer />
        <UsersContainer />
    </div>
    </Provider>
  );
}
