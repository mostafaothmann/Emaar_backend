import { PartialType } from '@nestjs/mapped-types';
import {  PhotoOfPropertyDto } from './create-photoofproperty.dto';

export class UpdatePhotoofpropertyDto extends PartialType(PhotoOfPropertyDto) {}
