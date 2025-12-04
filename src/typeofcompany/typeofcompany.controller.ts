import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TypeOfCompanyService } from './typeofcompany.service';
import { TypeOfCompanyDto } from './dto/create-typeofcompany.dto';
import { UpdateTypeOfCompanyDto } from './dto/update-typeofcompany.dto';


@Controller('typeofcompany')
export class TypeofcompanyController {
  constructor(private readonly typeofcompanyService: TypeOfCompanyService) {}

  @Post()
  create(@Body() typeofcompanyDto: TypeOfCompanyDto) {
    return this.typeofcompanyService.create(typeofcompanyDto);
  }

  @Get()
  findAll() {
    return this.typeofcompanyService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.typeofcompanyService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTypeofcompanyDto: UpdateTypeOfCompanyDto) {
    return this.typeofcompanyService.update(+id, updateTypeofcompanyDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.typeofcompanyService.remove(+id);
  }
}
