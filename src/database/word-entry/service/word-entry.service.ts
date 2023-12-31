import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { WordEntry } from '../schemas/word-entry.schema';
import { Model, Types } from 'mongoose';
import { UpdateWordEntryInput } from '../dto/update-word-entry.input';

@Injectable()
export class WordEntryService {
  constructor(
    @InjectModel(WordEntry.name) private wordEntryModel: Model<WordEntry>,
  ) {}

  async getWordEntryById(id: Types.ObjectId): Promise<WordEntry> {
    try {
      const wordEntry = await this.wordEntryModel.findById(id);
      if (!wordEntry) throw new BadRequestException('Word entry not found');
      return wordEntry;
    } catch (err) {
      throw err;
    }
  }

  async updateWordEntry(
    updateWordEntryInput: UpdateWordEntryInput,
  ): Promise<WordEntry> {
    try {
      const wordEntry = await this.wordEntryModel.findByIdAndUpdate(
        updateWordEntryInput._id,
        updateWordEntryInput,
      );
      if (!wordEntry) throw new BadRequestException('Word entry not found');
      return wordEntry;
    } catch (err) {
      throw err;
    }
  }
}
