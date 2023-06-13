type Item = {
  key: string;
  space?: number;
  clip?: number;
};



const colliderOrder: Item[] = [
  {
    key: "theSpanishPhrase",
  },
  {
    key: "spanishPhrase",
    clip: 0.5,
  },
  {
    key: "wouldBeSimilarToSaying",
  },
{
    key: "englishPhrase",
    clip: 0.5,
  },
{
    key: "inEnglish",
    space: 0.5,
  },
// 5
{
    key: "nowMimicThePhrase",
  },
  {
    key: "spanishPhraseSlowedDown",
    clip: 0.6,
  },
  {
    key: "asTheAudioLoops3Times",
  },
  {
    key: "spanishPhraseSlowedDown",
    clip: 0.6,
  },
  {
    key: "spanishPhraseSlowedDown",
    clip: 0.6,
  },
// 10
  {
    key: "spanishPhraseSlowedDown",
    clip: 0.6,
    space: 1,
  },
  {
    key: "nowPayAttentionForThePhrase",
  },
  {
    key: "spanishPhraseSlowedDown",
    clip: 0.6,
  },
  {
    key: "inTheFollowing3Examples",
    space: 0.6,
  },
  {
    key: "ejemploUno",
  },
// 15
  {
    key: "example1",
    space: 1,
  },
  {
    key: "ejemploDos",
  },
  {
    key: "example2",
    space: 1,
  },
  {
    key: "ejemploTres",
  },
  {
    key: "example3",
    space: 1,
  },
// 20
  {
    key: "toSay",
  },
  {
    key: "englishPhrase",
  },
  {
    key: "inSpanishYouWouldSay",
    clip: 0.5,
  },
  {
    key: "spanishPhrase",
  },
  {
    key: "spanishPhrase",
  },
// 25
  {
    key: "spanishPhrase",
    space: 2,
  },
];




const looperOrder: Item[] = [
  // practice mimicking along with the phrase...
  {
    key: "practiceMimickingThePhrase",
  },
  {
    key: "spanishPhrase",
    clip: 0.5,
  },
  // {
  //   key: "asTheAudioLoopsAtReducedSpeed",
  // },

  // // 3 slow
  // {
  //   key: "spanishPhraseSlowedDown",
  //   clip: 0.6,
  // },
  // {
  //   key: "spanishPhraseSlowedDown",
  //   clip: 0.6,
  // },
  // {
  //   key: "spanishPhraseSlowedDown",
  //   clip: 0.6,
  // },

  // {
  //   key: "nowContinue",
  // },

  // // 7 normal
  // {
  //   key: "spanishPhrase",
  //   clip: 0.4,
  // },
  // {
  //   key: "spanishPhrase",
  //   clip: 0.4,
  // },
  // {
  //   key: "spanishPhrase",
  //   clip: 0.4,
  // },
  // {
  //   key: "spanishPhrase",
  //   clip: 0.4,
  // },
  // {
  //   key: "spanishPhrase",
  //   clip: 0.4,
  // },
  // {
  //   key: "spanishPhrase",
  //   clip: 0.4,
  // },
  // {
  //   key: "spanishPhrase",
  //   clip: 0.4,
  // },
  // {
  //   key: "spanishPhrase",
  //   clip: 0.4,
  // },
  // {
  //   key: "spanishPhrase",
  //   clip: 0.4,
  // },
  // {
  //   key: "spanishPhrase",
  //   clip: 0.4,
  //   space: 2,
  // },
];


const order = {
  collider: colliderOrder,
  looper: looperOrder,
} as { [key: string]: Item[]};

export default order;
