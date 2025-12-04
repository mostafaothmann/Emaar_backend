import { Test, TestingModule } from '@nestjs/testing';
import { VideoofpropertyController } from './videoofproperty.controller';
import { VideoofpropertyService } from './videoofproperty.service';

describe('VideoofpropertyController', () => {
  let controller: VideoofpropertyController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [VideoofpropertyController],
      providers: [VideoofpropertyService],
    }).compile();

    controller = module.get<VideoofpropertyController>(VideoofpropertyController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
