import { ConversorModule } from './conversor.module';

describe('ConversorModule', () => {
  let conversorModule: ConversorModule;

  beforeEach(() => {
    conversorModule = new ConversorModule();
  });

  it('should create an instance', () => {
    expect(conversorModule).toBeTruthy();
  });
});
