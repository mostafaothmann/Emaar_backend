import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { UpdateVideoOfPropertyDto } from './dto/update-videoofproperty.dto';
import { VideoOfProperty } from './entities/videoofproperty.entity';
import { VideoOfPropertyDto } from './dto/create-videoofproperty.dto';

@Injectable()
export class VideoOfPropertyService {
  constructor(
    @InjectRepository(VideoOfProperty)
    private readonly videoOfPropertyRepository: Repository<VideoOfProperty>,
  ) {}

  create(dto: VideoOfPropertyDto): Promise<VideoOfProperty> {
    const video = this.videoOfPropertyRepository.create(dto);
    return this.videoOfPropertyRepository.save(video);
  }

  findAll(): Promise<VideoOfProperty[]> {
    return this.videoOfPropertyRepository.find();
  }

  findOne(id: number): Promise<VideoOfProperty | null> {
    return this.videoOfPropertyRepository.findOneBy({ id });
  }

  async update(id: number, updateDto: UpdateVideoOfPropertyDto): Promise<VideoOfProperty | null> {
    await this.videoOfPropertyRepository.update(id, updateDto);
    return this.findOne(id);
  }

  async remove(id: number): Promise<void> {
    await this.videoOfPropertyRepository.delete(id);
  }
}
