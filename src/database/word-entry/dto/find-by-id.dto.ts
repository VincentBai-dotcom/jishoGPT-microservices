import { IsOptional } from 'class-validator';

export class FindByIDDto {
  readonly wordID: string;

  @IsOptional()
  readonly selectedFields?: string[];
}
