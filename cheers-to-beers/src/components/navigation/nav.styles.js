import styled from "styled-components";

export const MainNav = styled.div`
  display: flex;
  align-items: center;
  height: 100px;
  width: 100%;
  background-color: rgba(255, 255, 255, 0);
  transition: all 0.4s;
  border-bottom: 1px solid #000;

  img {
    width: 115px;
    height: auto;
  }

  &.main-nav--fixed {
    height: 75px;
    position: fixed;
    box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.1);
    background-color: rgba(255, 255, 255, 0.9);
    backdrop-filter: saturate(180%) blur(20px);

    ul li {
      font-size: 0.9rem;
    }

    img {
      width: 75px;
    }
  }

  @media only screen and (max-width: 768px) {
    padding: 0 15px;
  }
`;

export const MainNavListItem = styled.div`
  display: flex;
  align-items: center;
  text-transform: uppercase;

  ul {
    display: flex;
    list-style: none;
    align-items: center;
    padding: 0;
    margin: 0;

    li:hover {
      color: orange;
      cursor: pointer;
    }
  }
`;
