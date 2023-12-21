export const pricing: Record<
  OpenAiModel,
  Record<'inputCost' | 'outputCost', number>
> = {
  'gpt-4-1106-preview': {
    inputCost: 0.01,
    outputCost: 0.03,
  },
  'gpt-3.5-turbo-1106': {
    inputCost: 0.001,
    outputCost: 0.002,
  },
};
