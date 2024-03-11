import { Test, TestingModule } from '@nestjs/testing';
import { FxConversionController } from './fx-conversion.controller';
import { FxConversionService } from './fx-conversion.service';

describe('FxConversionController', () => {
  let controller: FxConversionController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FxConversionController],
      providers: [FxConversionService],
    }).compile();

    controller = module.get<FxConversionController>(FxConversionController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
