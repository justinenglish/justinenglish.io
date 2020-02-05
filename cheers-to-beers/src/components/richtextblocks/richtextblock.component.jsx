import React, { Component } from "react";
import {
  SimpleTextBlock,
  SimpleTextBlockCopy,
  SimpleTextBlockHeader
} from "./richtextblock.styles";

class RichTextBlock extends Component {
  render() {
    return (
      <div className="container text-center">
        <div className="row">
          <SimpleTextBlock>
            <SimpleTextBlockHeader>
              <h1>Simple Text Block Header</h1>
            </SimpleTextBlockHeader>
            <SimpleTextBlockCopy>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
              quis congue tellus. Aliquam ac mi at mauris convallis egestas. Nam
              accumsan venenatis quam, vel imperdiet urna congue ut. Curabitur
              suscipit erat a quam sodales efficitur. Etiam sit amet dolor vel
              velit efficitur congue at quis elit. Fusce non nulla nec odio
              finibus ullamcorper. In nec viverra risus, vitae semper nibh. Cras
              ut ligula efficitur, tempor enim non, faucibus ipsum. Nunc
              vestibulum dolor massa. Sed faucibus viverra odio.
            </SimpleTextBlockCopy>
          </SimpleTextBlock>
        </div>
      </div>
    );
  }
}

export default RichTextBlock;
