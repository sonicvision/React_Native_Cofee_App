import React, { Component } from "react";
import Coffee from "../Components/Coffee";
import Map from "../Components/Map";
import actions from "../Actions/coffee";
import { connect } from "react-redux";
import { View } from "react-native";
import styles from "./Styles/HomeStyles";
import ModeSwitch from "../Components/ModeSwitch";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {
    this.props.fetchOutlets();
  }
  render() {
    return (
      <View style={styles.container}>
        {this.props.isMapModeSelected ? (
          <Map style={styles.map} outlets={this.props.outlets} />
        ) : (
          <Coffee
            outlets={this.props.outlets}
            isLoading={this.props.isLoading}
          />
        )}
        <ModeSwitch
          displayModeChanged={this.props.displayModeChanged}
          isMapModeSelected={this.props.isMapModeSelected}
        />
      </View>
    );
  }
}

const mapStateToProps = ({ coffee }) => ({
  outlets: coffee.outlets,
  isLoading: coffee.isLoading,
  isMapModeSelected: coffee.isMapModeSelected
});

const mapDispatchToProps = actions;

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
