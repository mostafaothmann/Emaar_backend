import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TypeOfPropertyService } from './typeofproperty.service';
import { TypeOfPropertyDto } from './dto/create-typeofproperty.dto';
import { UpdateTypeOfPropertyDto } from './dto/update-typeofproperty.dto';


@Controller('typeofproperty')
export class TypeofpropertyController {
  constructor(private readonly typeofpropertyService: TypeOfPropertyService) {}

  @Post()
  create(@Body() createTypeofpropertyDto: TypeOfPropertyDto) {
    return this.typeofpropertyService.create(createTypeofpropertyDto);
  }

  @Get()
  findAll() {
    return this.typeofpropertyService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.typeofpropertyService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTypeofpropertyDto: UpdateTypeOfPropertyDto) {
    return this.typeofpropertyService.update(+id, updateTypeofpropertyDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.typeofpropertyService.remove(+id);
  }
}
