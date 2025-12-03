import { Test, TestingModule } from '@nestjs/testing';
import { TypeofmaterialController } from './typeofmaterial.controller';
import { TypeofmaterialService } from './typeofmaterial.service';

describe('TypeofmaterialController', () => {
  let controller: TypeofmaterialController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TypeofmaterialController],
      providers: [TypeofmaterialService],
    }).compile();

    controller = module.get<TypeofmaterialController>(TypeofmaterialController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
