export const wordContentGenerationOptions: Record<
  wordContentName,
  Record<'temperature' | 'max_tokens', number>
> = {
  description: {
    temperature: 0.2,
    max_tokens: 140,
  },
  popCulture: {
    temperature: 0.5,
    max_tokens: 140,
  },
  epistemology: {
    temperature: 0.2,
    max_tokens: 300,
  },
  synonym: {
    temperature: 0.2,
    max_tokens: 130,
  },
  antonym: {
    temperature: 0.2,
    max_tokens: 130,
  },
  usageContext: {
    temperature: 0.8,
    max_tokens: 350,
  },
  conjugation: {
    temperature: 0.1,
    max_tokens: 600,
  },
};
