import { Injectable } from '@nestjs/common';
import { CreateFxConversionDto } from './dto/create-fx-conversion.dto';
import { UpdateFxConversionDto } from './dto/update-fx-conversion.dto';

@Injectable()
export class FxConversionService {
  create(createFxConversionDto: CreateFxConversionDto) {
    return 'This action adds a new fxConversion';
  }

  findAll() {
    return `This action returns all fxConversion`;
  }

  findOne(id: number) {
    return `This action returns a #${id} fxConversion`;
  }

  update(id: number, updateFxConversionDto: UpdateFxConversionDto) {
    return `This action updates a #${id} fxConversion`;
  }

  remove(id: number) {
    return `This action removes a #${id} fxConversion`;
  }
}