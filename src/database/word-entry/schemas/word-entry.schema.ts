import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, Document, Types } from 'mongoose';
import { Definition, DefinitionSchema } from './definition.schema';
import { ObjectType, Field } from '@nestjs/graphql';

export type WordEntryDocument = HydratedDocument<WordEntry>;

@Schema()
@ObjectType()
export class WordEntry extends Document {
  @Field(() => String)
  _id: Types.ObjectId;

  @Field(() => String)
  @Prop({ required: true })
  word: string;

  @Field(() => String)
  @Prop({ required: true })
  pronunciation: string;

  @Field(() => [Definition])
  @Prop({ type: [DefinitionSchema] })
  definitions: Definition[];

  @Field(() => String, { nullable: true })
  @Prop()
  description?: string;

  @Field(() => [String], { nullable: true })
  @Prop({ type: [String] })
  synonyms?: string[];

  @Field(() => String, { nullable: true })
  @Prop()
  usageContext?: string;

  @Field(() => Boolean, { nullable: true })
  @Prop()
  isVerb?: boolean;

  @Field(() => String, { nullable: true })
  @Prop()
  conjugation: string;
}

export const WordEntrySchema = SchemaFactory.createForClass(WordEntry);
// Enforce uniqueness of the entry
WordEntrySchema.index({ word: 1, pronunciation: 1 }, { unique: true });
