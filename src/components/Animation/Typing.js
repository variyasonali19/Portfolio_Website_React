import React, { Component } from "react";
import { init } from "ityped";

export default class Typing extends Component {
  componentDidMount(props) {
    const myElement = document.querySelector("#myElement");
    init(myElement, {
      showCursor: true,
      strings: this.props.arrayText,
      displayBackTyping: false,
      loop: true,
    });
  }
  render() {
    return <p style={{ color: "white", height: "5px" }} id="myElement"></p>;
  }
}
