import { Test, TestingModule } from '@nestjs/testing';
import { TypeofwneringController } from './typeofownering.controller';
import { TypeOfOwneringService } from './typeofownering.service';

describe('TypeofwneringController', () => {
  let controller: TypeofwneringController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TypeofwneringController],
      providers: [TypeOfOwneringService],
    }).compile();

    controller = module.get<TypeofwneringController>(TypeofwneringController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
