import React from "react";
import remark from "remark";
import reactRenderer from "remark-react";

const Markdown = ({ children, ...rest }) => (
  <div {...rest}>
    {
      remark()
        .use(reactRenderer)
        .processSync(children).contents
    }
  </div>
);

export default Markdown;
