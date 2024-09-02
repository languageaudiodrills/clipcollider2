const clipNamesByType = {
  spanishPhrase: "Spanish phrase",
  englishPhrase: "English phrase",
  example1: "Example 1",
  example2: "Example 2",
  example3: "Example 3",
  example4: "Example 4",
  example5: "Example 5",
  example6: "Example 6",
  example7: "Example 7",
  example8: "Example 8",
  example9: "Example 9",
  example10: "Example 10",
} as {
  [key: string]: string,
};

type ClipType = keyof typeof clipNamesByType;

export type { ClipType };
export default clipNamesByType;
