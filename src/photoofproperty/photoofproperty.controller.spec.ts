import { Test, TestingModule } from '@nestjs/testing';
import { PhotoofpropertyController } from './photoofproperty.controller';
import { PhotoofpropertyService } from './photoofproperty.service';

describe('PhotoofpropertyController', () => {
  let controller: PhotoofpropertyController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PhotoofpropertyController],
      providers: [PhotoofpropertyService],
    }).compile();

    controller = module.get<PhotoofpropertyController>(PhotoofpropertyController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
