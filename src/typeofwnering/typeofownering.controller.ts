import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TypeOfOwneringService } from './typeofownering.service';
import { TypeOfOwneringDto } from './dto/create-typeofownering.dto';
import { UpdateTypeOfOwneringDto } from './dto/update-typeofownering.dto';


@Controller('typeofownering')
export class TypeofwneringController {
  constructor(private readonly typeofowneringService: TypeOfOwneringService) {}

  @Post()
  create(@Body() createTypeofwneringDto: TypeOfOwneringDto) {
    return this.typeofowneringService.create(createTypeofwneringDto);
  }

  @Get()
  findAll() {
    return this.typeofowneringService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.typeofowneringService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTypeofwneringDto: UpdateTypeOfOwneringDto) {
    return this.typeofowneringService.update(+id, updateTypeofwneringDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.typeofowneringService.remove(+id);
  }
}
