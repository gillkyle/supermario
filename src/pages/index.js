import React from "react";
import { graphql, Link } from "gatsby";

const ComponentName = ({ data }) => (
  <main>
    <h1>Super Mario Bros</h1>
    <section>
      {data.allLevel.nodes.map((level) => (
        <Link to={level.gatsbyPath}>{level.name}</Link>
      ))}
    </section>
  </main>
);

export const query = graphql`
  {
    allLevel {
      nodes {
        id
        name
        enemies
        setting
        gatsbyPath(filePath: "/level/{Level.name}")
      }
    }
  }
`;
export default ComponentName;
