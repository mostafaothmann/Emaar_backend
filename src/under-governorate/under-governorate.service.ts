import { Injectable } from '@nestjs/common';
import { CreateUnderGovernorateDto } from './dto/create-under-governorate.dto';
import { UpdateUnderGovernorateDto } from './dto/update-under-governorate.dto';

@Injectable()
export class UnderGovernorateService {
  create(createUnderGovernorateDto: CreateUnderGovernorateDto) {
    return 'This action adds a new underGovernorate';
  }

  findAll() {
    return `This action returns all underGovernorate`;
  }

  findOne(id: number) {
    return `This action returns a #${id} underGovernorate`;
  }

  update(id: number, updateUnderGovernorateDto: UpdateUnderGovernorateDto) {
    return `This action updates a #${id} underGovernorate`;
  }

  remove(id: number) {
    return `This action removes a #${id} underGovernorate`;
  }
}
