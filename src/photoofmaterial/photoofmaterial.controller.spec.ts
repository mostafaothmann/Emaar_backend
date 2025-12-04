import { Test, TestingModule } from '@nestjs/testing';
import { PhotoofmaterialController } from './photoofmaterial.controller';
import { PhotoofmaterialService } from './photoofmaterial.service';

describe('PhotoofmaterialController', () => {
  let controller: PhotoofmaterialController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PhotoofmaterialController],
      providers: [PhotoofmaterialService],
    }).compile();

    controller = module.get<PhotoofmaterialController>(PhotoofmaterialController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
