import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { WordEntrySchema } from './schemas/word-entry.schema';
import { DefinitionSchema } from './schemas/definition.schema';
import { WordEntryService } from './word-entry.service';
import { WordEntryController } from './word-entry.controller';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: 'WordEntry', schema: WordEntrySchema },
      { name: 'Definition', schema: DefinitionSchema },
    ]),
  ],
  providers: [WordEntryService],
  controllers: [WordEntryController],
})
export class WordEntryModule {}
