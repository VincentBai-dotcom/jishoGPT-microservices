import { ObjectType, Field } from '@nestjs/graphql';

@ObjectType()
export class GenerateWordContentResponse {
  @Field()
  content: string;
}
