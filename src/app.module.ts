import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { OpenaiModule } from './openai/openai.module';
import { MongooseModule } from '@nestjs/mongoose';
import { WordEntryModule } from './word-entry/word-entry.module';
import { WordEntryService } from './word-entry/word-entry.service';

@Module({
  imports: [
    OpenaiModule,
    MongooseModule.forRoot(process.env.MONGODB_URL),
    ConfigModule.forRoot(),
    WordEntryModule,
  ],
  controllers: [],
  providers: [WordEntryService],
})
export class AppModule {}
