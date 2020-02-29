import styled from "styled-components";

export const CardFilter = styled.div`
  display: flex;
  align-items: center;
  margin: 0 auto 30px;
  padding-left: 15px;
  max-width: 1200px;

  @media only screen and (max-width: 325px) {
    display: inline-block;
    padding-right: 15px;
    width: 100%;
  }
`;

export const CardFilterItem = styled.div`
  text-transform: uppercase;
  font-size: 1.25rem;
  padding: 6px 15px;
  background-color: orange;
  font-weight: bold;
  cursor: pointer;
  color: #fff;

  @media only screen and (max-width: 325px) {
    width: 75%;
  }

  &:nth-child(2) {
    border-top-left-radius: 4px;

    @media only screen and (max-width: 325px) {
      border-top-right-radius: 4px;
    }
  }

  &:last-child {
    border-top-right-radius: 4px;

    @media only screen and (max-width: 325px) {
      border-top-right-radius: 0;
      border-bottom-left-radius: 4px;
      border-bottom-right-radius: 4px;
    }
  }

  &.inactive {
    opacity: 0.3;
    background-color: #999;

    &:hover {
      background-color: orange;
      opacity: 0.7;
    }
  }
`;

export const CardFilterLabel = styled.div`
  font-weight: bold;
  font-size: 1.25rem;
  margin-right: 15px;

  @media only screen and (max-width: 325px) {
    margin-bottom: 10px;
  }
`;

export const CardContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
  max-width: 1200px;
  margin: 0 auto;

  @media only screen and (max-width: 768px) {
    display: block;
    margin: 0 15px;
  }
`;

export const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex: 0 0 30%;
  background-color: ivory;
  border: 1px solid rgba(0, 0, 0, 0.3);
  border-radius: 2px;
  padding: 12px 15px;
  margin-bottom: 30px;
  margin-right: 30px;
  position: relative;

  &:hover {
    box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.1);
  }

  @media only screen and (min-width: 992px) {
    &:nth-child(3n) {
      margin-right: 0;
    }

    &:last-child {
      margin-right: 0;
    }
  }

  @media only screen and (max-width: 992px) {
    margin-right: 0;
  }
`;

export const CardFavoriteIcon = styled.div`
  position: absolute;
  top: -16px;
  right: -16px;

  i {
    font-size: 36px;
    color: rgba(117, 117, 117, 0.8);

    &:hover {
      color: #d9db49;
      cursor: pointer;
    }
  }

  @media only screen and (max-width: 992px) {
    top: -15px;
    right: -12px;
  }
`;

export const CardSectionTitle = styled.div`
  font-size: 2.25rem;
  padding: 0 15px;
  margin: 0 0 50px;
  text-align: center;

  @media only screen and (max-width: 768px) {
    font-size: 1.8rem;
  }
`;

export const CardTitle = styled.div`
  font-size: 1.1rem;
  font-weight: 600;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  padding-bottom: 12px;
`;

export const CardIntro = styled.div`
  padding-top: 12px;
  font-size: 0.9rem;
`;

export const CardTagline = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  height: 100%;
  margin-top: 12px;
  font-style: italic;
  font-size: 0.8rem;
  color: #777;
`;
