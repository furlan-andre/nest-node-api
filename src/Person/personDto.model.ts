/* eslint-disable prettier/prettier */
import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

export class PersonDto {  
    @IsNotEmpty({ message: 'The member id must be valid.' })
    @ApiProperty({ required:true })
    id: number;

    @IsNotEmpty({ message: 'the member name must be valid.' })    
    @ApiProperty({ required: true, minimum: 3, maximum:200 })
    name: string;

    @IsNotEmpty({ message: 'the member email must be valid.' })
    @ApiProperty({ required: true,  minimum: 3, maximum:200 })
    email: string;

    @IsNotEmpty({ message: 'the member document must be valid.' })
    @ApiProperty({ required: true, minimum:11, maximum:11 })
    document: string;
}