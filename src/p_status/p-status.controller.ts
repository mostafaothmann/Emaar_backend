// p-status.controller.ts
import { Controller, Get, Post, Body, Param, Delete, Put, Patch } from '@nestjs/common';
import { PStatusDto } from './dto/create-pstatus.dto';
import { UpdatePStatusDto } from './dto/update-pstatus.dto';
import { PStatusService } from './p-status.service';


@Controller('p-status')
export class PStatusController {
  constructor(private readonly pStatusService: PStatusService) {}

  @Post()
  create(@Body() dto: PStatusDto) {
    return this.pStatusService.create(dto);
  }

  @Get()
  findAll() {
    return this.pStatusService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.pStatusService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() dto: UpdatePStatusDto) {
    return this.pStatusService.update(+id, dto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.pStatusService.remove(+id);
  }
}
