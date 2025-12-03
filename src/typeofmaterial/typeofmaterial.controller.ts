import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TypeOfMaterialService } from './typeofmaterial.service';
import { UpdateTypeOfMaterialDto } from './dto/update-typeofmaterial.dto';
import { TypeOfMaterialDto } from './dto/create-typeofmaterial.dto';


@Controller('typeofmaterial')
export class TypeofmaterialController {
  constructor(private readonly typeofmaterialService: TypeOfMaterialService) {}

  @Post()
  create(@Body() createTypeofmaterialDto: TypeOfMaterialDto) {
    return this.typeofmaterialService.create(createTypeofmaterialDto);
  }

  @Get()
  findAll() {
    return this.typeofmaterialService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.typeofmaterialService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTypeofmaterialDto: UpdateTypeOfMaterialDto) {
    return this.typeofmaterialService.update(+id, updateTypeofmaterialDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.typeofmaterialService.remove(+id);
  }
}
