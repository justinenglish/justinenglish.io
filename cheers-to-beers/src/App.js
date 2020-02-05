import React from "react";
import Nav from "./components/navigation/nav.component";
import IntroBanner from "./components/banners/banners.component";
import RichTextBlock from "./components/richtextblocks/richtextblock.component";

function App() {
  return (
    <React.Fragment>
      <Nav />
      <IntroBanner />
      <RichTextBlock />
    </React.Fragment>
  );
}

export default App;
