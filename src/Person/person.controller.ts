import { PersonService } from './person.service';
/* eslint-disable prettier/prettier */
import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { PersonDto } from './personDto.model';
import { ApiCreatedResponse, ApiOkResponse, ApiTags } from '@nestjs/swagger';

@Controller('Person')
@ApiTags('Person')
export class PersonController {
  constructor(private readonly personService: PersonService) {    
  }
  
  @Get()
  @ApiOkResponse({ type: PersonDto, isArray: true })
  findAll() {
    return this.personService.findAll();
  }

  @Get(':id')
  @ApiOkResponse({ type: PersonDto })
  get(@Param('id') id: string) {
   return this.personService.findById(+id);
  }

  @Post()
  @ApiCreatedResponse({ type: PersonDto })
  create(@Body() personDto: PersonDto){
    return this.personService.create(personDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
   return this.personService.remove(+id);
  }
}
