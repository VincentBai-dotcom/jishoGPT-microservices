import { ObjectType, Field, Float } from '@nestjs/graphql';

@ObjectType()
export class GenerateWordContentResponse {
  @Field()
  content: string;

  @Field(() => Float)
  cost: number;
}
