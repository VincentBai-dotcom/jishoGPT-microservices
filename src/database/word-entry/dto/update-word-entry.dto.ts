import { InputType, Field } from '@nestjs/graphql';
import { DefinitionSchema, Definition } from '../schemas/definition.schema';
import { Types } from 'mongoose';

@InputType()
export class UpdateWordEntryInput {
  @Field(() => String)
  _id: Types.ObjectId;

  @Field(() => String)
  readonly word: string;

  @Field(() => String)
  readonly pronunciation: string;

  @Field(() => [DefinitionSchema])
  readonly definitions: Definition[];

  @Field(() => String)
  readonly description: string;

  @Field(() => [String])
  readonly synonyms: string[];

  @Field(() => String)
  readonly usageContext: string;

  @Field(() => Boolean)
  readonly isVerb: boolean;

  @Field(() => String)
  readonly conjugation: string;
}
