import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';

import { TypeOfWorkerDto } from './dto/create-typeofworker.dto';
import { TypeOfWorkerService } from './typeofworker.service';
import { UpdateTypeOfWorkerDto } from './dto/update-typeofworker.dto';

@Controller('typeofworker')
export class TypeofworkerController {
  constructor(private readonly typeofworkerService: TypeOfWorkerService) {}

  @Post()
  create(@Body() typeOfWorkerDto: TypeOfWorkerDto) {
    return this.typeofworkerService.create(typeOfWorkerDto);
  }

  @Get()
  findAll() {
    return this.typeofworkerService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.typeofworkerService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTypeofworkerDto: UpdateTypeOfWorkerDto) {
    return this.typeofworkerService.update(+id, updateTypeofworkerDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.typeofworkerService.remove(+id);
  }
}
