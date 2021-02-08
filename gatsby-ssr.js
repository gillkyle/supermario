import React from "react";

export const onRenderBody = ({ setHeadComponents }) => {
  setHeadComponents([
    <link
      href="https://fonts.googleapis.com/css?family=Press+Start+2P"
      rel="stylesheet"
    />,
    <link href="https://unpkg.com/nes.css/css/nes.css" rel="stylesheet" />,
  ]);
};
