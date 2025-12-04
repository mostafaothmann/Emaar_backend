import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PhotoOfMaterialService } from './photoofmaterial.service';
import { PhotoOfMaterialDto } from './dto/create-photoofmaterial.dto';
import { UpdatePhotoOfMaterialDto } from './dto/update-photoofmaterial.dto';


@Controller('photoofmaterial')
export class PhotoofmaterialController {
  constructor(private readonly photoofmaterialService: PhotoOfMaterialService) {}

  @Post()
  create(@Body() createPhotoofmaterialDto: PhotoOfMaterialDto) {
    return this.photoofmaterialService.create(createPhotoofmaterialDto);
  }

  @Get()
  findAll() {
    return this.photoofmaterialService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.photoofmaterialService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePhotoofmaterialDto: UpdatePhotoOfMaterialDto) {
    return this.photoofmaterialService.update(+id, updatePhotoofmaterialDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.photoofmaterialService.remove(+id);
  }
}
