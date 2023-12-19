import { Module } from '@nestjs/common';
import { WordEntryModule } from './word-entry/word-entry.module';

@Module({
  imports: [WordEntryModule],
})
export class DatabaseModule {}
