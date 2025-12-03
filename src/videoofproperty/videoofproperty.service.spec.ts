import { Test, TestingModule } from '@nestjs/testing';
import { VideoofpropertyService } from './videoofproperty.service';

describe('VideoofpropertyService', () => {
  let service: VideoofpropertyService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [VideoofpropertyService],
    }).compile();

    service = module.get<VideoofpropertyService>(VideoofpropertyService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
