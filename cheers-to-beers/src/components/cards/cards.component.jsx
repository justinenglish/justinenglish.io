import React, { Component } from "react";
import {
  CardContainer,
  CardSectionTitle,
  CardTitle,
  CardIntro,
  CardTagline
} from "./cards.styles";

class Cards extends Component {
  constructor(props) {
    super(props);

    this.state = { beers: [] };
  }

  componentDidMount() {
    fetch("https://api.punkapi.com/v2/beers")
      .then(res => res.json())
      .then(data => {
        this.setState({
          beers: data
        });
      })
      .catch(console.log);
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          {this.state.beers.map(beer => console.log(beer))}
          <CardContainer>
            <CardSectionTitle>Card Section Title</CardSectionTitle>
            <CardTitle></CardTitle>
            <CardIntro></CardIntro>
            <CardTagline></CardTagline>
          </CardContainer>
        </div>
      </div>
    );
  }
}

export default Cards;
