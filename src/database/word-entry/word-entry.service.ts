import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { WordEntry } from './schemas/word-entry.schema';
import { Model } from 'mongoose';

@Injectable()
export class WordEntryService {
  constructor(
    @InjectModel(WordEntry.name) private wordEntryModel: Model<WordEntry>,
  ) {}
}
