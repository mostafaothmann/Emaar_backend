import { PartialType } from '@nestjs/mapped-types';
import { CreateUnderGovernorateDto } from './create-under-governorate.dto';

export class UpdateUnderGovernorateDto extends PartialType(CreateUnderGovernorateDto) {}
