import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { WordEntrySchema } from './schemas/word-entry.schema';
import { DefinitionSchema } from './schemas/definition.schema';
import { WordEntryService } from './service/word-entry.service';
import { WordEntryResolver } from './resolver/word-entry.resolver';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: 'WordEntry', schema: WordEntrySchema },
      { name: 'Definition', schema: DefinitionSchema },
    ]),
  ],
  providers: [WordEntryService, WordEntryResolver],
  exports: [WordEntryService],
})
export class WordEntryModule {}
