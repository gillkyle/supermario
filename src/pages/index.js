import React from "react";
import { graphql } from "gatsby";

const ComponentName = ({ data }) => (
  <section>
    <h1>Super Mario Bros</h1>
    <pre>{JSON.stringify(data, null, 4)}</pre>
  </section>
);

export const query = graphql`
  {
    allLevel {
      nodes {
        id
        name
        enemies
        setting
      }
    }
  }
`;
export default ComponentName;
