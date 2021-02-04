const levels = [
  {
    name: "World 1-1",
    setting: "Overworld",
    enemies: ["Little Goomba", "Koopa Troopa"],
  },
  {
    name: "World 1-2",
    setting: "Underground",
    enemies: ["Little Goomba", "Koopa Troopa", "Piranha Plant"],
  },
  {
    name: "World 1-3",
    setting: "Athletic",
    enemies: ["Little Goomba", "Koopa Troopa", "Koopa Paratroopa"],
  },
  {
    name: "World 1-4",
    setting: "Castle",
    enemies: ["Fire-Bar", "fake Bowser", "Little Goomba"],
  },
  {
    name: "World 2-1",
    setting: "Overworld",
    enemies: [
      "Little Goomba",
      "Koopa Troopa",
      "Koopa Paratroopa",
      "Piranha Plant",
    ],
  },
  {
    name: "World 2-2",
    setting: "Underwater",
    enemies: ["Blooper", "Cheep-cheep", "Piranha Plant"],
  },

  {
    name: "World 2-4",
    setting: "Castle",
    enemies: ["Fire-Bar", "Podoboo", "fake Bowser", "Koopa Troopa"],
  },
  {
    name: "World 3-1",
    setting: "Overworld",
    enemies: [
      "Little Goomba",
      "Koopa Troopa",
      "Koopa Paratroopa",
      "Piranha Plant",
      "Hammer Brother",
    ],
  },
  {
    name: "World 3-2",
    setting: "Overworld",
    enemies: [
      "Little Goomba",
      "Koopa Troopa",
      "Koopa Paratroopa",
      "Piranha Plant",
    ],
  },
  {
    name: "World 3-3",
    setting: "Athletic",
    enemies: ["Little Goomba", "Koopa Troopa", "Koopa Paratroopa"],
  },
  {
    name: "World 3-4",
    setting: "Castle",
    enemies: ["Fire-Bar", "Podoboo", "fake Bowser", "Buzzy Beetle"],
  },
  {
    name: "World 4-1",
    setting: "Overworld",
    enemies: ["Piranha Plant", "Lakitu", "Spiny"],
  },
  {
    name: "World 4-2",
    setting: "Underground",
    enemies: ["Little Goomba", "Koopa Troopa", "Piranha Plant", "Buzzy Beetle"],
  },
  {
    name: "World 4-3",
    setting: "Athletic",
    enemies: ["Koopa Troopa", "Koopa Paratroopa"],
  },
  {
    name: "World 4-4",
    setting: "Castle",
    enemies: ["Piranha Plant", "Podoboo", "Fire-Bar", "fake Bowser", "Spiny"],
  },
  {
    name: "World 5-1",
    setting: "Overworld",
    enemies: [
      "Little Goomba",
      "Koopa Troopa",
      "Koopa Paratroopa",
      "Piranha Plant",
      "Bullet Bill",
    ],
  },
  {
    name: "World 5-2",
    setting: "Overworld",
    enemies: [
      "Little Goomba",
      "Koopa Troopa",
      "Koopa Paratroopa",
      "Piranha Plant",
      "Buzzy Beetle",
      "Bullet Bill",
      "Hammer Brother",
      "Bloober",
      "Cheep-cheep",
    ],
  },
  {
    name: "World 5-3",
    setting: "Athletic",
    enemies: [
      "Little Goomba",
      "Koopa Troopa",
      "Koopa Paratroopa",
      "Bullet Bill",
    ],
  },
  {
    name: "World 5-4",
    setting: "Castle",
    enemies: ["Podoboo", "Fire-Bar", "fake Bowser", "Lakitu"],
  },
  {
    name: "World 6-1",
    setting: "Overworld",
    enemies: ["Piranha Plant", "Lakitu", "Spiny"],
  },
  {
    name: "World 6-2",
    setting: "Overworld",
    enemies: [
      "Little Goomba",
      "Koopa Troopa",
      "Koopa Paratroopa",
      "Piranha Plant",
      "Buzzy Beetle",
      "Bloober",
      "Cheep-cheep",
    ],
  },
  {
    name: "World 6-4",
    setting: "Castle",
    enemies: ["Podoboo", "Fire-Bar", "fake Bowser", "Bloober"],
  },
  {
    name: "World 7-1",
    setting: "Overworld",
    enemies: [
      "Koopa Troopa",
      "Koopa Paratroopa",
      "Piranha Plant",
      "Buzzy Beetle",
      "Hammer Brother",
      "Bullet Bill",
    ],
  },
  {
    name: "World 7-2",
    setting: "Underwater",
    enemies: ["Bloober", "Cheep-cheep", "Piranha Plant"],
  },
  {
    name: "World 7-3",
    setting: "Athletic",
    enemies: ["Cheep-cheep", "Koopa Troopa", "Koopa Paratroopa"],
  },
  {
    name: "World 7-4",
    setting: "Castle",
    enemies: ["Podoboo", "Fire-Bar", "fake Bowser", "Hammer Brother"],
  },
  {
    name: "World 8-1",
    setting: "Overworld",
    enemies: [
      "Little Goomba",
      "Koopa Troopa",
      "Koopa Paratroopa",
      "Piranha Plant",
      "Buzzy Beetle",
    ],
  },
  {
    name: "World 8-2",
    setting: "Overworld",
    enemies: [
      "Little Goomba",
      "Koopa Paratroopa",
      "Piranha Plant",
      "Buzzy Beetle",
      "Lakitu",
      "Spiny",
      "Bullet Bill",
    ],
  },
  {
    name: "World 8-3",
    setting: "Overworld",
    enemies: [
      "Koopa Troopa",
      "Koopa Paratroopa",
      "Piranha Plant",
      "Bullet Bill",
      "Hammer Brother",
    ],
  },
  {
    name: "World 8-4",
    setting: "Castle",
    enemies: [
      "Little Goomba",
      "Koopa Paratroopa",
      "Piranha Plant",
      "Fire-Bar",
      "Podoboo",
      "Buzzy Beetle",
      "Hammer Brother",
      "Bloober",
      "Cheep-cheep",
      "Bowser",
    ],
  },
];

exports.sourceNodes = ({ actions, createNodeId, createContentDigest }) => {
  levels.forEach((level) => {
    const node = {
      id: createNodeId(`Level-${level.name}`),
      name: level.name,
      setting: level.setting,
      enemies: level.enemies,
      internal: {
        type: "Level",
        contentDigest: createContentDigest(level),
      },
    };
    actions.createNode(node);
  });
};
