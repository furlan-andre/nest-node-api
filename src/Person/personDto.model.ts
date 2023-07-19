/* eslint-disable prettier/prettier */
import { ApiProperty } from '@nestjs/swagger';

export class PersonDto {  
    @ApiProperty()
    id: number;

    @ApiProperty({ required: true })
    name: string;
}