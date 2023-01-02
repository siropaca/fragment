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
   * blog()
   */
  describe('blog()', () => {
    it('正しいパスが返るか', () => {
      expect(URL.blog()).toEqual('/blog');
    });
  });

  /**
   * articleDetail()
   */
  describe('articleDetail()', () => {
    const ARTICLE_ID = 'clcby90x4jik30bzv6mekyrcc';

    it('正しいパスが返るか', () => {
      expect(URL.articleDetail(ARTICLE_ID)).toEqual('/blog/clcby90x4jik30bzv6mekyrcc');
    });
  });

  /**
   * tagsResults()
   */
  describe('tagsResults()', () => {
    it('正しいパスが返るか', () => {
      expect(URL.tagsResults('JavaScript')).toEqual('/tags/JavaScript');
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
