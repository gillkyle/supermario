import * as React from "react";

export default function Level({ data }) {
  console.log(data);
  return (
    <main>
      <h1>{data.level.name}</h1>
      <p>{data.level.setting}</p>
      <ul>
        {data.level.enemies.map((enemy) => (
          <li>{enemy}</li>
        ))}
      </ul>
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
