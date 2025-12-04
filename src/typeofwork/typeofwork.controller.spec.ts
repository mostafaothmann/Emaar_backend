import { Test, TestingModule } from '@nestjs/testing';
import { TypeofworkController } from './typeofwork.controller';
import { TypeofworkService } from './typeofwork.service';

describe('TypeofworkController', () => {
  let controller: TypeofworkController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TypeofworkController],
      providers: [TypeofworkService],
    }).compile();

    controller = module.get<TypeofworkController>(TypeofworkController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
