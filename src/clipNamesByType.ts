const clipNamesByType = {
  spanishPhrase: "Spanish phrase",
  englishPhrase: "English phrase",
  spanishPhraseSlowedDown: "Spanish phrase slowed down",
  example1: "Example 1",
  example2: "Example 2",
  example3: "Example 3",
} as {
  [key: string]: string,
};

type ClipType = keyof typeof clipNamesByType;

export type { ClipType };
export default clipNamesByType;
