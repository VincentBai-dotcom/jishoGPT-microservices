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

  @Field(() => String)
  @Prop({ select: false })
  description: string;

  @Field(() => [String])
  @Prop({ type: [String] })
  synonyms: string[];

  @Field(() => String)
  @Prop()
  usageContext: string;

  @Field(() => Boolean)
  @Prop()
  isVerb: boolean;

  @Field(() => String)
  @Prop()
  conjugation: string;
}

export const WordEntrySchema = SchemaFactory.createForClass(WordEntry);
// Enforce uniqueness of the entry
WordEntrySchema.index({ word: 1, pronunciation: 1 }, { unique: true });
