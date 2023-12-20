import { InputType, Field } from '@nestjs/graphql';
import { Types } from 'mongoose';

@InputType()
export class UpdateWordEntryInput {
  @Field(() => String)
  readonly _id: Types.ObjectId;

  @Field(() => String, { nullable: true })
  readonly word?: string;

  @Field(() => String, { nullable: true })
  readonly pronunciation?: string;

  @Field(() => String, { nullable: true })
  readonly description?: string;

  @Field(() => [String], { nullable: true })
  readonly synonyms?: string[];

  @Field(() => String, { nullable: true })
  readonly usageContext?: string;

  @Field(() => Boolean, { nullable: true })
  readonly isVerb?: boolean;

  @Field(() => String, { nullable: true })
  readonly conjugation?: string;
}
