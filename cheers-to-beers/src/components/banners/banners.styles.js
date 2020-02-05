import styled from "styled-components";

export const ParallaxBanner = styled.div`
  background-image: url(${process.env.PUBLIC_URL + "images/glass-of-beer.jpg"});
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  height: 600px;
`;
