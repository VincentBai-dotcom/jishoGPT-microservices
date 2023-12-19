import { InputType, Field } from '@nestjs/graphql';
import { Types } from 'mongoose';

@InputType()
export class UpdateWordEntryInput {
  @Field(() => String)
  _id: Types.ObjectId;

  @Field(() => String)
  readonly word: string;

  @Field(() => String)
  readonly pronunciation: string;

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
