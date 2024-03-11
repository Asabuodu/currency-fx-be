import { Module } from '@nestjs/common';
import { FxConversionService } from './fx-conversion.service';
import { FxConversionController } from './fx-conversion.controller';

@Module({
  controllers: [FxConversionController],
  providers: [FxConversionService],
})
export class FxConversionModule {}
