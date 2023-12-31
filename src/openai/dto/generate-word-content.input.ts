import { InputType, Field, registerEnumType } from '@nestjs/graphql';
import { Types } from 'mongoose';
import { WordContentType } from '../types';
import { OpenAIModel } from '../types';

registerEnumType(WordContentType, {
  name: 'WordContentType',
  description: 'The type of content of a given word',
});

registerEnumType(OpenAIModel, {
  name: 'OpenAiModel',
  description: 'The model to use for generating the content',
});

@InputType()
export class GenerateWordContentInput {
  @Field(() => String, { description: 'The id of the word' })
  readonly wordId: Types.ObjectId;

  @Field(() => WordContentType, {
    description: 'The type of content of a given word',
  })
  readonly wordContentType: WordContentType;
}
