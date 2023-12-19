import { Field, ObjectType } from '@nestjs/graphql';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type DefinitionDocument = HydratedDocument<Definition>;

@Schema()
@ObjectType()
export class Definition {
  @Field(() => [String])
  @Prop({ type: [String], required: true })
  tags: string[];

  @Field(() => [String])
  @Prop({ type: [String], required: true })
  definition: string[];
}

export const DefinitionSchema = SchemaFactory.createForClass(Definition);
