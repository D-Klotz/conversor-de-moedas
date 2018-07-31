import { DataBrPipe } from './data-br.pipe';

describe('DataBrPipe', () => {
  it('create an instance', () => {
    const pipe = new DataBrPipe();
    expect(pipe).toBeTruthy();
  });

  it('Deve transformar a data 2018-07-30 em 30/07/2018', () => {
    const pipe = new DataBrPipe();
    expect(pipe.transform('2018-07-30')).toEqual('30/07/2018');
  });
});
