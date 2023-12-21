export const wordContentGenerationOptions: Record<
  WordContentType,
  Record<string, any>
> = {
  description: {
    temperature: 0.2,
    max_tokens: 140,
    model: OpenAiModel.Gpt4,
  },
  popCulture: {
    temperature: 0.5,
    max_tokens: 140,
    model: OpenAiModel.Gpt3,
  },
  epistemology: {
    temperature: 0.2,
    max_tokens: 300,
    model: OpenAiModel.Gpt3,
  },
  synonym: {
    temperature: 0.2,
    max_tokens: 130,
    model: OpenAiModel.Gpt3,
  },
  antonym: {
    temperature: 0.2,
    max_tokens: 130,
    model: OpenAiModel.Gpt3,
  },
  usageContext: {
    temperature: 0.8,
    max_tokens: 350,
    model: OpenAiModel.Gpt3,
  },
  conjugation: {
    temperature: 0.1,
    max_tokens: 600,
    model: OpenAiModel.Gpt3,
  },
};
