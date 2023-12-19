import { Args, Resolver, Query, Mutation } from '@nestjs/graphql';
import { WordEntry } from '../schemas/word-entry.schema';
import { WordEntryService } from '../service/word-entry.service';
import { Types } from 'mongoose';
import { UpdateWordEntryInput } from '../dto/update-word-entry.dto';

@Resolver(() => WordEntry)
export class WordEntryResolver {
  constructor(private readonly wordEntryService: WordEntryService) {}

  @Query(() => WordEntry, {
    name: 'wordEntryById',
    description: 'Get a word entry by its id',
  })
  getWordEntryById(
    @Args('id', { type: () => String, description: 'The id of the word entry' })
    id: Types.ObjectId,
  ) {
    return this.wordEntryService.getWordEntryById(id);
  }

  @Mutation(() => WordEntry)
  updateWordEntry(
    @Args('updateWordEntryInput')
    updateWordEntryInput: UpdateWordEntryInput,
  ) {
    return this.wordEntryService.updateWordEntry(
      updateWordEntryInput._id,
      updateWordEntryInput,
    );
  }
}
