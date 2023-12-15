import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { OpenaiModule } from './openai/openai.module';
import { MongooseModule } from '@nestjs/mongoose';
import { WordEntryModule } from './database/word-entry/word-entry.module';

@Module({
  imports: [
    OpenaiModule,
    WordEntryModule,
    ConfigModule.forRoot(),
    MongooseModule.forRoot(process.env.MONGODB_URL),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
