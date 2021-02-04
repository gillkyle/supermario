import React from "react";
import { graphql, Link } from "gatsby";

const ComponentName = ({ data }) => (
  <main>
    <h1>Super Mario Bros</h1>
    <section
      style={{
        display: `grid`,
        gridTemplateColumns: `repeat(auto-fit, minmax(150px, 1fr))`,
        gridGap: 16,
      }}
    >
      {data.allLevel.nodes.map((level) => (
        <Link
          to={level.gatsbyPath}
          style={{
            padding: 32,
            borderRadius: 4,
            backgroundColor: `white`,
          }}
        >
          {level.name}
        </Link>
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
