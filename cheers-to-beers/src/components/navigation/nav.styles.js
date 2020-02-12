import styled from "styled-components";

export const MainNav = styled.div`
  display: flex;
  align-items: center;
  height: 100px;
  width: 100%;
  background-color: rgba(40, 33, 12, 1);
  border-bottom: 1px solid #fff;
  transition: all 0.4s;
  z-index: 99999;

  img {
    width: 115px;
    height: auto;
  }

  &.main-nav--fixed {
    height: 75px;
    position: fixed;
    box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.1);
    background-color: rgba(40, 33, 12, 0.9);
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
  color: #fff;

  ul {
    display: flex;
    list-style: none;
    align-items: center;
    padding: 0;
    margin: 0;

    li:hover {
      color: #d9db49;
      cursor: pointer;
    }
  }
`;
