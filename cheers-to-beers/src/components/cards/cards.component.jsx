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
      isAllActive: true,
      isMyFavsActive: false
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
          <CardFilterItem
            className={this.state.isAllActive ? "" : "inactive"}
            onClick={() =>
              this.setState({
                isAllActive: !this.state.isAllActive,
                isMyFavsActive: !this.state.isMyFavsActive
              })
            }
          >
            All
          </CardFilterItem>
          <CardFilterItem
            className={this.state.isMyFavsActive ? "" : "inactive"}
            onClick={() =>
              this.setState({
                isMyFavsActive: !this.state.isMyFavsActive,
                isAllActive: !this.state.isAllActive
              })
            }
          >
            My Favs
          </CardFilterItem>
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
