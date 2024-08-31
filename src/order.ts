type Item = {
  key: string;
  space?: number;             // creates a pause after clip
  clip?: number;              // removes time from end of clip
  replace?: boolean;          // replace based on the type
  replacements?: string[];
};



const flashOrder: Item[] = [
  {
    key: "spanishPhrase",
    clip: 0.5,
  },
  {
    key: "englishPhrase",
    clip: 0.5,
    space: 0.5,
  },
  {
    key: "FT-shadow5Times",
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
    space: 1,
  },
// 7
  {
    key: "listenForThePhrase",
  },
  {
    key: "spanishPhrase",
    clip: 0.6,
  },
  {
    key: "FT-in-following-3-clips",
    space: 1,
  },
  // 9
  {
    key: "ejemploUno",
  },
  {
    key: "example1",
    space: 1.5,
  },
  {
    key: "ejemploDos",
  },
  {
    key: "example2",
    space: 1.5,
  },
  {
    key: "ejemploTres",
  },
  {
    key: "example3",
    space: 1.5,
  },
  {
    key: "FT-now-shadow-3-more-times",
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
    key: "LT-the-phrase-is",
  },
  {
    key: "spanishPhrase",
    clip: 0.5,
    space: 0.5,
  },
  {
    key: "LT-shadow-phrase-10-times",
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
    key: "CT-listen-for-phrase",
  },
  {
    key: "spanishPhrase",
    clip: 0.4,
  },
  {
    key: "CT-in-following-10-clips",
    space: 1,
  },
  // 10 examples
  {
    key: "ejemploUno",
  },
  {
    key: "example1",
    space: 1.5,
  },
  {
    key: "ejemploDos",
  },
  {
    key: "example2",
    space: 1.5,
  },
  {
    key: "ejemploTres",
  },
  {
    key: "example3",
    space: 1.5,
  },
  // 3
  {
    key: "ejem4",
  },
  {
    key: "example4",
    space: 1.5,
  },
  {
    key: "ejem5",
  },
  {
    key: "example5",
    space: 1.5,
  },
  {
    key: "ejem6",
  },
  {
    key: "example6",
    space: 1.5,
  },
  // 6
  {
    key: "ejem7",
  },
  {
    key: "example7",
    space: 1.5,
  },
  {
    key: "ejem8",
  },
  {
    key: "example8",
    space: 1.5,
  },
  {
    key: "ejem9",
  },
  {
    key: "example9",
    space: 1.5,
  },
  // 9
  {
    key: "ejem10",
  },
  {
    key: "example10",
    space: 2,
  },
];

const order = {
  flashTrack: flashOrder,
  looperTrack: looperOrder,
} as { [key: string]: Item[]};

export default order;
export type {Item};