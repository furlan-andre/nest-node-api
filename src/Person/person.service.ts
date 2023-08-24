/* eslint-disable prettier/prettier */
import { Injectable } from "@nestjs/common/decorators";
import { PrismaService } from "src/database/prisma.service";
import { PersonDto } from "./personDto.model";


@Injectable()
export class PersonService {
  constructor(private prisma: PrismaService) {}

  create(personDto: PersonDto) {    
     return this.prisma.person.create({ data: personDto})
  }

  findAll() {
    return this.prisma.person.findMany({});
  }

  findById(id: number) {    
    return this.prisma.person.findUnique({ where: { id } });
  }

  remove(id: number){
      return this.prisma.person.delete({ where: { id } });
  }
}