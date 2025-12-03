import { Test, TestingModule } from '@nestjs/testing';
import { TypeofworkerController } from './typeofworker.controller';
import { TypeofworkerService } from './typeofworker.service';

describe('TypeofworkerController', () => {
  let controller: TypeofworkerController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TypeofworkerController],
      providers: [TypeofworkerService],
    }).compile();

    controller = module.get<TypeofworkerController>(TypeofworkerController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
