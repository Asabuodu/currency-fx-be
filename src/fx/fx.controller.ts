import { Controller, Get, Query } from '@nestjs/common';
import { GrpcMethod } from '@nestjs/microservices';
import { FxService } from './fx.service';
import { Request, Response } from './fx_pb';

@Controller('fx')
export class FxController {
  constructor(private readonly fxService: FxService) {}

  @GrpcMethod('FXService', 'GetQuote')
  getQuote(data: Request): Response {
    // Implement logic to fetch or generate FX quotes
    // You can use a separate service for this
    return new Response();
  }

  @Get('/convert')
  convertFx(
    @Query('sourceCurrency') sourceCurrency: string,
    @Query('destinationCurrency') destinationCurrency: string,
    @Query('amount') amount: number,
  ) {
    // Implement logic for currency conversion
    const convertedAmount = amount * 1.5; // Replace with actual conversion logic
    return {
      sourceCurrency,
      destinationCurrency,
      amount,
      convertedAmount,
    };
  }
}

