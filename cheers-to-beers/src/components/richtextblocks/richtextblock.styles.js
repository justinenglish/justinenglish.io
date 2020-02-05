import styled from "styled-components";

export const SimpleTextBlock = styled.div`
  padding: 0 15px;
  margin: 50px 0;
`;

export const SimpleTextBlockHeader = styled.div`
  font-weight: 600;

  @media only screen and (min-width: 768px) {
    h1 {
      font-size: 4rem;
    }
    h3 {
      font-size: 3rem;
    }
  }
`;

export const SimpleTextBlockCopy = styled.div`
  margin: 25px 0;

  @media only screen and (min-width: 768px) {
    font-size: 1.25rem;
  }
`;
