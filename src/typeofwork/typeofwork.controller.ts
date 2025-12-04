import { Controller, Get, Post, Patch, Delete, Param, Body } from '@nestjs/common';
import { TypeOfWorkService } from './typeofwork.service';
import { TypeOfWork } from './entities/typeofwork.entity';


@Controller('typeofwork')
export class TypeOfWorkController {
  constructor(private readonly typeOfWorkService: TypeOfWorkService) {}

  @Post()
  create(@Body() data: Partial<TypeOfWork>) {
    return this.typeOfWorkService.create(data);
  }

  @Get()
  findAll() {
    return this.typeOfWorkService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.typeOfWorkService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: number, @Body() data: Partial<TypeOfWork>) {
    return this.typeOfWorkService.update(+id, data);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.typeOfWorkService.remove(+id);
  }
}
