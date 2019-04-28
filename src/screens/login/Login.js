import * as React from "react";
import { Image, Platform } from "react-native";
import { Container, Content, Header, Body, Title, Button, Text, View, Footer } from "native-base";
import { Icon } from 'react-native-elements'
//import styles from "./styles";
export interface Props {
  loginForm: any,
  onLogin: Function,
}
export interface State {}
class Login extends React.Component<Props, State> {
  render() {
    const { lang } = this.props
    return (
      <Container>
        <Header style={{ height: 200 }}>
          <Body style={{ alignItems: "center" }}>
            <Icon
              name='rocket'
              type='simple-line-icon'
              size={60}
              color='#FFF'
              />
            <Title>React Native</Title>
            <View padder>
              <Text style={{ color: Platform.OS === "ios" ? "#000" : "#FFF" }}>
                Build Something Amazing
              </Text>
            </View>
          </Body>
        </Header>
        <Content>
          {this.props.loginForm}
          <View padder>
            <Button block onPress={() => this.props.onLogin()}>
              <Text bold>{lang.login}</Text>
            </Button>
          </View>
        </Content>
        <Footer style={{ backgroundColor: "#F8F8F8" }}>
          <View style={{ alignItems: "center", opacity: 0.5, flexDirection: "row" }}>
            <View>
              <Text style={{ color: "#000" }}>{lang.not_have_account} </Text>
            </View>
            <View>
              <Text onPress={() => this.props.navigation.navigate("Drawer")} primary bold>{lang.signup}</Text>
            </View>
          </View>
        </Footer>
      </Container>
    );
  }
}

export default Login;
