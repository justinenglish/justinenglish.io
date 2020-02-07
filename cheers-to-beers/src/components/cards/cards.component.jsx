import React, { Component } from "react";
import { CardContainer } from "./cards.styles";

class Cards extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  componentDidMount() {}

  render() {
    return (
      <CardContainer className="text-center">
        <h3 style={{ fontSize: "3rem" }}>Cards Header</h3>
      </CardContainer>
    );
  }
}

export default Cards;
