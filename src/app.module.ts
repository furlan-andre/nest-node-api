import { Module } from '@nestjs/common';
import { PersonModule } from './Person/person.module';

@Module({
  imports: [PersonModule],
  controllers: [],
  providers: [PersonModule],
})
export class AppModule {}
