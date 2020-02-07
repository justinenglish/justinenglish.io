import React from "react";
import Nav from "./components/navigation/nav.component";
import IntroBanner from "./components/banners/banners.component";
import RichTextBlock from "./components/richtextblocks/richtextblock.component";
import Cards from "./components/cards/cards.component";

function App() {
  return (
    <React.Fragment>
      <Nav />
      <IntroBanner />
      <RichTextBlock />
      <Cards />
    </React.Fragment>
  );
}

export default App;
