type Item = {
  key: string;
  space?: number;             // creates a pause after clip
  clip?: number;              // removes time from end of clip
  replace?: boolean;          // replace based on the type
  replacements?: string[];
  targetVol?: number;         // volume to adjust the clip to (db)
};



const flashOrder: Item[] = [
  {
    key: "tone",
    clip: 0.5,
  },
  {
    key: "spanishPhrase",
  },
  {
    key: "englishPhrase",
    clip: 0.5,
    space: 0.5,
  },
  {
    key: "nowShadowTheThing5Times",
    replace: true,
  },
  // 5
  {
    key: "spanishPhrase",
    clip: 0.5,
  },
  {
    key: "spanishPhrase",
    clip: 0.5,
  },
  {
    key: "spanishPhrase",
    clip: 0.5,
  },
  {
    key: "spanishPhrase",
    clip: 0.5,
  },
  {
    key: "spanishPhrase",
    clip: 0.5,
    space: 1.5,
  },
// 7
  {
    key: "listenForThe",
    replace: true,
    clip: .9,
  },
  {
    key: "spanishPhrase",
    clip: 0.6,
  },
  {
    key: "inTheFollowing3Clips",
    space: .5,
  },
  // 9
  {
    key: "number1",
  },
  {
    key: "example1",
    space: 1.5,
    targetVol: -14,
  },
  {
    key: "number2",
  },
  {
    key: "example2",
    space: 1.5,
    targetVol: -14,
  },
  {
    key: "number3",
  },
  {
    key: "example3",
    space: 1.5,
    targetVol: -14,
  },
  {
    key: "nowShadowTheThing3MoreTimes",
    replace: true,
  },
  {
    key: "spanishPhrase",
    clip: 0.5,
  },
  {
    key: "spanishPhrase",
    clip: 0.5,
  },
  {
    key: "spanishPhrase",
    clip: 0.5,
    space: 2,
  },
];




const looperOrder: Item[] = [
  // practice mimicking along with the phrase...
  {
    key: "theThingIs",
    replace: true,
  },
  {
    key: "spanishPhrase",
    clip: 0.5,
    space: 0.5,
  },
  {
    key: "shadowTheThing10Times",
    replace: true,
  },
  // loop 10 times
  {
    key: "spanishPhrase",
    clip: 0.4,
  },
  {
    key: "spanishPhrase",
    clip: 0.4,
  },
  {
    key: "spanishPhrase",
    clip: 0.4,
  },
  {
    key: "spanishPhrase",
    clip: 0.4,
  },
  {
    key: "spanishPhrase",
    clip: 0.4,
  },
  {
    key: "spanishPhrase",
    clip: 0.4,
  },
  {
    key: "spanishPhrase",
    clip: 0.4,
  },
  {
    key: "spanishPhrase",
    clip: 0.4,
  },
  {
    key: "spanishPhrase",
    clip: 0.4,
  },
  {
    key: "spanishPhrase",
    clip: 0.4,
    space: 2,
  },
];


const clipOrder: Item[] = [
  {
    key: "listenForTheThing",
    replace: true,
  },
  {
    key: "spanishPhrase",
    clip: 0.4,
  },
  {
    key: "inTheFollowing10Clips",
    space: 1,
  },
  // 10 examples
  {
    key: "number1",
    clip: 0.75,
  },
  {
    key: "example1",
    space: 1.5,
    targetVol: -14,
  },
  {
    key: "number2",
    clip: 0.75,
  },
  {
    key: "example2",
    space: 1.5,
    targetVol: -14,
  },
  {
    key: "number3",
    clip: 0.75,
  },
  {
    key: "example3",
    space: 1.5,
    targetVol: -14,
  },
  // 3
  {
    key: "number4",
    clip: 0.75,
  },
  {
    key: "example4",
    space: 1.5,
    targetVol: -14,
  },
  {
    key: "number5",
    clip: 0.75,
  },
  {
    key: "example5",
    space: 1.5,
    targetVol: -14,
  },
  {
    key: "number6",
    clip: 0.75,
  },
  {
    key: "example6",
    space: 1.5,
    targetVol: -14,
  },
  // 6
  {
    key: "number7",
    clip: 0.75,
  },
  {
    key: "example7",
    space: 1.5,
    targetVol: -14,
  },
  {
    key: "number8",
    clip: 0.75,
  },
  {
    key: "example8",
    space: 1.5,
    targetVol: -14,
  },
  {
    key: "number9",
    clip: 0.75,
  },
  {
    key: "example9",
    space: 1.5,
    targetVol: -14,
  },
  // 9
  {
    key: "number10",
    clip: 0.75,
  },
  {
    key: "example10",
    space: 2,
    targetVol: -14,
  },
];

const order = {
  flashTrack: flashOrder,
  looperTrack: looperOrder,
  clipTrack: clipOrder,
} as { [key: string]: Item[]};

export default order;
export type {Item};