import { Test, TestingModule } from '@nestjs/testing';
import { PhotoofmaterialService } from './photoofmaterial.service';

describe('PhotoofmaterialService', () => {
  let service: PhotoofmaterialService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PhotoofmaterialService],
    }).compile();

    service = module.get<PhotoofmaterialService>(PhotoofmaterialService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
