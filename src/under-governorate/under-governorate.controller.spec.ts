import { Test, TestingModule } from '@nestjs/testing';
import { UnderGovernorateController } from './under-governorate.controller';
import { UnderGovernorateService } from './under-governorate.service';

describe('UnderGovernorateController', () => {
  let controller: UnderGovernorateController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UnderGovernorateController],
      providers: [UnderGovernorateService],
    }).compile();

    controller = module.get<UnderGovernorateController>(UnderGovernorateController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
