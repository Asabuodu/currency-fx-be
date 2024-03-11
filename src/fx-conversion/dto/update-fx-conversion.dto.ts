import { PartialType } from '@nestjs/mapped-types';
import { CreateFxConversionDto } from './create-fx-conversion.dto';

export class UpdateFxConversionDto extends PartialType(CreateFxConversionDto) {}
