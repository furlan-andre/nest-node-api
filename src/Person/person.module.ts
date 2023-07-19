/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma.service';
import { PersonController } from './person.controller';
import { PersonService } from './person.service';

@Module({
  imports: [],
  controllers: [PersonController],
  providers: [PrismaService, PersonService],
  exports: [PersonModule]
})
export class PersonModule {}
