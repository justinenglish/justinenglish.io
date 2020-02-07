import React, { Component } from "react";
import { MainNav, MainNavListItem } from "./nav.styles";

class Nav extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isTop: true
    };
  }

  componentDidMount() {
    document.addEventListener("scroll", () => {
      const isTop = window.scrollY < 750;

      if (isTop !== this.state.isTop) {
        this.setState({ isTop });
      }
    });
  }

  render() {
    return (
      <MainNav className={this.state.isTop ? "" : "main-nav--fixed"}>
        <div className="container">
          <div className="row justify-content-between">
            <div className="main-nav__logo">
              <img
                src={process.env.PUBLIC_URL + "images/beer-logo.png"}
                alt="Cheers to Beers logo"
              />
            </div>
            <MainNavListItem>
              <ul>
                <li>Favorites</li>
              </ul>
            </MainNavListItem>
          </div>
        </div>
      </MainNav>
    );
  }
}

export default Nav;
