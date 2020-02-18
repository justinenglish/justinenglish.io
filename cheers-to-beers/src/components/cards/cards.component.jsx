import React, { Component } from "react";
import {
  CardContainer,
  CardSectionTitle,
  CardTitle,
  CardIntro,
  CardTagline,
  CardWrapper,
  CardFavoriteIcon,
  CardFilter,
  CardFilterItem,
  CardFilterLabel
} from "./cards.styles";

class Cards extends Component {
  constructor(props) {
    super(props);

    this.state = {
      beers: [],
      filter: {
        all: true,
        myFavorites: false
      }
    };
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
      <React.Fragment>
        <CardSectionTitle>Cheers to these beers.</CardSectionTitle>
        <CardFilter>
          <CardFilterLabel>Beer Filter:</CardFilterLabel>
          <CardFilterItem>All</CardFilterItem>
          <CardFilterItem>My Favs</CardFilterItem>
        </CardFilter>
        <CardContainer>
          {this.state.beers.map(beer => (
            <CardWrapper key={beer.id}>
              <CardTitle>{beer.name}</CardTitle>
              <CardFavoriteIcon>
                <i className="fa fa-star" aria-hidden="true"></i>
              </CardFavoriteIcon>
              <CardIntro>{beer.description}</CardIntro>
              <CardTagline>{beer.tagline}</CardTagline>
            </CardWrapper>
          ))}
        </CardContainer>
      </React.Fragment>
    );
  }
}

export default Cards;
