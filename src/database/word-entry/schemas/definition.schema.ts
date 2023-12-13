import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type DefinitionDocument = HydratedDocument<Definition>;

@Schema()
export class Definition {
  @Prop({ type: [String], required: true })
  tags: string[];

  @Prop({ type: [String], required: true })
  definition: string[];
}

export const DefinitionSchema = SchemaFactory.createForClass(Definition);
