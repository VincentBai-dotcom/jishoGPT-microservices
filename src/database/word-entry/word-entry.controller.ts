import {
  Body,
  Controller,
  HttpException,
  HttpStatus,
  Post,
} from '@nestjs/common';
import { GetWordEntryBasicInfoDto } from './dto/get-word-entry-basic-info.dto';
import { WordEntryService } from './word-entry.service';

@Controller('word-entry')
export class WordEntryController {
  constructor(private wordEntryService: WordEntryService) {}

  @Post('getWordEntryBasicInfo')
  async getWordEntryBasicInfo(
    @Body()
    body: GetWordEntryBasicInfoDto,
  ) {
    const { wordID } = body;
    try {
      const wordEntry = await this.wordEntryService.findByID({ wordID });

      return wordEntry;
    } catch (err) {
      throw new HttpException(err, HttpStatus.BAD_REQUEST);
    }
  }
}
