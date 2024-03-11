import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { FxConversionService } from './fx-conversion.service';
import { CreateFxConversionDto } from './dto/create-fx-conversion.dto';
import { UpdateFxConversionDto } from './dto/update-fx-conversion.dto';

@Controller('fx-conversion')
export class FxConversionController {
  constructor(private readonly fxConversionService: FxConversionService) {}

  @Post()
  create(@Body() createFxConversionDto: CreateFxConversionDto) {
    return this.fxConversionService.create(createFxConversionDto);
  }

  @Get()
  findAll() {
    return this.fxConversionService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.fxConversionService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateFxConversionDto: UpdateFxConversionDto) {
    return this.fxConversionService.update(+id, updateFxConversionDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.fxConversionService.remove(+id);
  }
}
