import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PropertyService } from './property.service';
import { PropertyDto } from './dto/create-property.dto';
import { UpdatePropertyDto } from './dto/update-property.dto';
import { CloudinaryService } from 'src/cloudinary.service';

@Controller('property')
export class PropertyController {
  constructor(private readonly propertyService: PropertyService,
    private readonly CloudinaryService: CloudinaryService
  ) { }

  @Post()
  async create(@Body() PropertyDto: PropertyDto) {
    const imagePath = await this.CloudinaryService.uploadImage(PropertyDto.image1!, 'properties')
    PropertyDto.image1 = imagePath.url;
    return this.propertyService.create(PropertyDto);
  }

  @Get()
  findAll() {
    return this.propertyService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.propertyService.findOne(+id);
  }
  @Get('/searchQuery')
  findAllBySearch(@Param('searchQuery') searchQuery: string) {
    return this.propertyService.findBySearch(searchQuery);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePropertyDto: UpdatePropertyDto) {
    return this.propertyService.update(+id, updatePropertyDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.propertyService.remove(+id);
  }
}
