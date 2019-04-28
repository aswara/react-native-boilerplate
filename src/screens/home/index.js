// @flow
import * as React from "react";
import { connect } from "react-redux";
import Home from "./Home";
export interface Props {
  navigation: any,
  fetchList: Function,
  data: Object,
}
export interface State {}
class HomeContainer extends React.Component<Props, State> {

  render() {
    const data = ["React Native Starter Kit", "React Navigation", "NativeBase Easy Grid", "NativeBase", "CodePush", "Redux"];
    return <Home navigation={this.props.navigation} list={data} />;
  }
}

function bindAction(dispatch) {
  return {
    
  };
}

const mapStateToProps = state => ({
  lang: state.lang
});
export default connect(mapStateToProps, bindAction)(HomeContainer);
