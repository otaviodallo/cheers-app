import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EventosModule } from './eventos/eventos.module';

@Module({
  controllers: [AppController],
  providers: [AppService],
  imports: [EventosModule],
})
export class AppModule {}
