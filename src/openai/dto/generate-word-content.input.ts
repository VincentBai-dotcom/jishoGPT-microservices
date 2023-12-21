import { InputType, Field, registerEnumType } from '@nestjs/graphql';
import { Types } from 'mongoose';

registerEnumType(WordContentType, {
  name: 'WordContentType',
  description: 'The type of content of a given word',
});

registerEnumType(OpenAiModel, {
  name: 'OpenAiModel',
  description: 'The model to use for generating the content',
});

@InputType()
export class GenerateWordContentInput {
  @Field(() => WordContentType, {
    description: 'The type of content of a given word',
  })
  readonly wordContentType: WordContentType;

  @Field(() => String, { description: 'The id of the word' })
  readonly wordId: Types.ObjectId;

  @Field(() => OpenAiModel, {
    description: 'The model to use for generating the content',
  })
  readonly model: OpenAiModel;
}
