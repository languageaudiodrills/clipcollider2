type Item = {
  key: string;
  space?: number;
  clip?: number;
};

const order: Item[] = [
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
    clip: 0.5,
  },
  {
    key: "asTheAudioLoops3Times",
  },
  {
    key: "spanishPhraseSlowedDown",
  },
  {
    key: "spanishPhraseSlowedDown",
  },
// 10
  {
    key: "spanishPhraseSlowedDown",
    space: 1,
  },
  {
    key: "nowPayAttentionForThePhrase",
  },
  {
    key: "spanishPhraseSlowedDown",
  },
  {
    key: "inTheFollowing3Examples",
    space: 1.5,
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

export default order;
