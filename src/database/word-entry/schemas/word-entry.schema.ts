import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, Document } from 'mongoose';
import { Definition, DefinitionSchema } from './definition.schema';

export type WordEntryDocument = HydratedDocument<WordEntry>;

@Schema()
export class WordEntry extends Document {
  @Prop({ required: true })
  word: string;

  @Prop({ required: true })
  pronunciation: string;

  @Prop({ type: [DefinitionSchema] })
  definitions: Definition[];

  @Prop({ select: false })
  description: string;

  @Prop({ type: [String], select: false })
  synonyms: string[];

  @Prop({ select: false })
  usageContext: string;

  @Prop()
  isVerb: boolean;

  @Prop({ select: false })
  conjugation: string;
}

export const WordEntrySchema = SchemaFactory.createForClass(WordEntry);
// Enforce uniqueness of the entry
WordEntrySchema.index({ word: 1, pronunciation: 1 }, { unique: true });
