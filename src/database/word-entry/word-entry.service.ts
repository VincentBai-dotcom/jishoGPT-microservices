import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { WordEntry, WordEntryDocument } from './schemas/word-entry.schema';
import { Model } from 'mongoose';
import { FindByIDDto } from './dto/find-by-id.dto';

@Injectable()
export class WordEntryService {
  constructor(
    @InjectModel(WordEntry.name) private wordEntryModel: Model<WordEntry>,
  ) {}

  async findByID(findByIDDto: FindByIDDto): Promise<WordEntryDocument> {
    const { wordID, selectedFields = [] } = findByIDDto;
    const selectionQuery = selectedFields.reduce(
      (accumulatedQuery, field) => accumulatedQuery + ` +${field}`,
      '',
    );
    try {
      const wordEntry = await this.wordEntryModel
        .findById(wordID)
        .select(selectionQuery);
      if (!wordEntry) throw new BadRequestException('Word entry not found');
      return wordEntry;
    } catch (err) {
      throw err;
    }
  }
}
