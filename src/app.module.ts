import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
// import { FxConversionModule } from './fx-conversion/fx-conversion.module';
import { FxModule } from './fx/fx.module';

@Module({
  imports: [
    // FxConversionModule, 
    FxModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
