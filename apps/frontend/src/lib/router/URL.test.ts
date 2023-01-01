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

  /**
   * articleDetail()
   */
  describe('articleDetail()', () => {
    const ARTICLE_ID = 'clcby90x4jik30bzv6mekyrcc';

    it('正しいパスが返るか', () => {
      expect(URL.articleDetail(ARTICLE_ID)).toEqual('/articles/clcby90x4jik30bzv6mekyrcc');
    });
  });

  /**
   * notfound()
   */
  describe('notfound()', () => {
    it('正しいパスが返るか', () => {
      expect(URL.notfound()).toEqual('/404');
    });
  });
});
