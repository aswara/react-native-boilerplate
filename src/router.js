// @flow
import React from "react";
import { createStackNavigator, createDrawerNavigator, createAppContainer, createSwitchNavigator } from "react-navigation";
import { Root } from "native-base";
import Login from "./screens/login";
import Home from "./screens/home";
import Sidebar from "./screens/sidebar";


const Drawer = createDrawerNavigator(
  {
    Home: { screen: Home }
  },
  {
    initialRouteName: "Home",
    contentComponent: props => <Sidebar {...props} />
  }
);


const AppNavigator = createStackNavigator(
  {
    Login: { screen: Login },
    Drawer: { screen: Drawer },
  },
  {
    initialRouteName: "Login",
    headerMode: "none"
  }
);



const AppContainer = createAppContainer(AppNavigator)

export default () => (
  <Root>
    <AppContainer />
  </Root>
);
