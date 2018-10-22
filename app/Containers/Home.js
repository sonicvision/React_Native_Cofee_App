import React, { Component } from "react";
import Coffee from "./Coffee";
import Map from "../Components/Map";

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return <Map />;
  }
}
