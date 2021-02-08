import * as React from "react";
import { graphql } from "gatsby";

export default function Level({ data }) {
  console.log(data);
  return (
    <main style={{ padding: 16 }}>
      <h1>{data.level.name}</h1>
      <p>{data.level.setting}</p>
      <div className="lists">
        <ul className="nes-list is-disc">
          {data.level.enemies.map((enemy) => (
            <li>{enemy}</li>
          ))}
        </ul>
      </div>
    </main>
  );
}

export const query = graphql`
  query($name: String) {
    level(name: { eq: $name }) {
      name
      setting
      enemies
    }
  }
`;
