import { PagePath } from './PagePath';

describe('PagePath', () => {
  /**
   * root()
   */
  describe('root()', () => {
    it('正しいパスが返るか', () => {
      expect(PagePath.root()).toEqual('/');
    });
  });

  /**
   * blog()
   */
  describe('blog()', () => {
    it('正しいパスが返るか', () => {
      expect(PagePath.blog()).toEqual('/blog');
    });
  });

  /**
   * articleDetail()
   */
  describe('articleDetail()', () => {
    const ARTICLE_ID = 'clcby90x4jik30bzv6mekyrcc';

    it('正しいパスが返るか', () => {
      expect(PagePath.articleDetail(ARTICLE_ID)).toEqual('/blog/clcby90x4jik30bzv6mekyrcc');
    });
  });

  /**
   * tagResult()
   */
  describe('tagResult()', () => {
    it('正しいパスが返るか', () => {
      expect(PagePath.tagResult('JavaScript')).toEqual('/tag/JavaScript');
    });
  });

  /**
   * tools()
   */
  describe('tools()', () => {
    it('正しいパスが返るか', () => {
      expect(PagePath.tools()).toEqual('/tools');
    });
  });

  /**
   * about()
   */
  describe('about()', () => {
    it('正しいパスが返るか', () => {
      expect(PagePath.about()).toEqual('/about');
    });
  });

  /**
   * notfound()
   */
  describe('notfound()', () => {
    it('正しいパスが返るか', () => {
      expect(PagePath.notfound()).toEqual('/404');
    });
  });
});
