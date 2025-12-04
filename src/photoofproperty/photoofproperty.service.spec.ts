import { Test, TestingModule } from '@nestjs/testing';
import { PhotoOfPropertyService } from './photoofproperty.service';

describe('PhotoofpropertyService', () => {
  let service: PhotoOfPropertyService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PhotoOfPropertyService],
    }).compile();

    service = module.get<PhotoOfPropertyService>(PhotoOfPropertyService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
