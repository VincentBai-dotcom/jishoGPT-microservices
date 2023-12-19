import { Controller } from '@nestjs/common';
import { WordEntryService } from '../service/word-entry.service';

@Controller('word-entry')
export class WordEntryController {
  constructor(private wordEntryService: WordEntryService) {}
}
