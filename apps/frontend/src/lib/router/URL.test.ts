import { URL } from './URL';

describe('URL', () => {
  /**
   * root()
   */
  describe('root()', () => {
    it('正しいパスが返るか', () => {
      expect(URL.root()).toEqual('/');
    });
  });
});
