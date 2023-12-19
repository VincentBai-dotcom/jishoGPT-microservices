import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, Document, Schema as MongooseSchema } from 'mongoose';
import { Definition, DefinitionSchema } from './definition.schema';
import { ObjectType, Field } from '@nestjs/graphql';

export type WordEntryDocument = HydratedDocument<WordEntry>;

@Schema()
@ObjectType()
export class WordEntry extends Document {
  @Field(() => String)
  _id: MongooseSchema.Types.ObjectId;

  @Field(() => String)
  @Prop({ required: true })
  word: string;

  @Field(() => String)
  @Prop({ required: true })
  pronunciation: string;

  @Field(() => [DefinitionSchema])
  @Prop({ type: [DefinitionSchema] })
  definitions: Definition[];

  @Field(() => String)
  @Prop({ select: false })
  description: string;

  @Field(() => [String])
  @Prop({ type: [String], select: false })
  synonyms: string[];

  @Field(() => String)
  @Prop({ select: false })
  usageContext: string;

  @Field(() => Boolean)
  @Prop()
  isVerb: boolean;

  @Field(() => String)
  @Prop({ select: false })
  conjugation: string;
}

export const WordEntrySchema = SchemaFactory.createForClass(WordEntry);
// Enforce uniqueness of the entry
WordEntrySchema.index({ word: 1, pronunciation: 1 }, { unique: true });
