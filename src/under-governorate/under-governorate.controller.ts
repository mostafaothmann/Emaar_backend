import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { UnderGovernorateService } from './under-governorate.service';
import { CreateUnderGovernorateDto } from './dto/create-under-governorate.dto';
import { UpdateUnderGovernorateDto } from './dto/update-under-governorate.dto';

@Controller('under-governorate')
export class UnderGovernorateController {
  constructor(private readonly underGovernorateService: UnderGovernorateService) {}

  @Post()
  create(@Body() createUnderGovernorateDto: CreateUnderGovernorateDto) {
    return this.underGovernorateService.create(createUnderGovernorateDto);
  }

  @Get()
  findAll() {
    return this.underGovernorateService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.underGovernorateService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUnderGovernorateDto: UpdateUnderGovernorateDto) {
    return this.underGovernorateService.update(+id, updateUnderGovernorateDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.underGovernorateService.remove(+id);
  }
}
