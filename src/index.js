import React, {Component} from 'react';
import { StyleProvider } from "native-base";
import { Provider } from "react-redux";
import { PersistGate } from 'redux-persist/integration/react'
import Router from "./router";
import getTheme from "./theme/components";
import variables from "./theme/variables/platform";
import { store, persistor } from './redux/store';


export default class App extends Component {
  render() {
    return (
      <StyleProvider style={getTheme(variables)}>
        <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
            <Router />
          </PersistGate>
        </Provider>
      </StyleProvider>
    );
  }
}