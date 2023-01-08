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
   * blogIndex()
   */
  describe('blogIndex()', () => {
    it('正しいパスが返るか', () => {
      expect(PagePath.blogIndex()).toEqual('/blog');
    });
  });

  /**
   * blogDetail()
   */
  describe('blogDetail()', () => {
    const ARTICLE_ID = 'clcby90x4jik30bzv6mekyrcc';

    it('正しいパスが返るか', () => {
      expect(PagePath.blogDetail(ARTICLE_ID)).toEqual('/blog/clcby90x4jik30bzv6mekyrcc');
    });
  });

  /**
   * blogNew()
   */
  describe('blogNew()', () => {
    it('正しいパスが返るか', () => {
      expect(PagePath.blogNew()).toEqual('/blog/new');
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

  /**
   * heros()
   */
  describe('heros()', () => {
    it('正しいパスが返るか', () => {
      expect(PagePath.heros()).toEqual('/heros');
    });
  });
});
