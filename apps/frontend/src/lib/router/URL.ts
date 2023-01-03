export const URL = {
  /**
   * ルートページ
   */
  root(withOrigin?: boolean) {
    const path = '/';
    return withOrigin ? URL.withOrigin(path) : path;
  },

  /**
   * 記事ページ
   */
  blog(withOrigin?: boolean) {
    const path = `/blog`;
    return withOrigin ? URL.withOrigin(path) : path;
  },

  articleDetail(articleId: string, withOrigin?: boolean) {
    const path = `/blog/${articleId}`;
    return withOrigin ? URL.withOrigin(path) : path;
  },

  /**
   * タグ検索結果
   */
  tagsResults(tag: string, withOrigin?: boolean) {
    const path = `/tags/${tag}`;
    return withOrigin ? URL.withOrigin(path) : path;
  },

  /**
   * 404ページ
   */
  notfound(withOrigin?: boolean) {
    const path = '/404';
    return withOrigin ? URL.withOrigin(path) : path;
  },

  withOrigin(path: string): string {
    return process.env.NEXT_PUBLIC_SITE_ORIGIN + path;
  },

  //----------------------------------------------------------------------------
  // Private Methods
  //----------------------------------------------------------------------------

  /**
   * クエリパラメータを作成する
   * 返る文字列はエンコード済み
   * @example ?aaa=bbb&ccc=ddd
   */
  _makeSearchParams(params?: Record<string, string>): string {
    if (!params) return '';

    const searchParams = new URLSearchParams();

    Object.keys(params).forEach((key) => {
      const value = String((params as any)[key]);

      if (value !== '') {
        searchParams.set(key, value);
      }
    });

    const query = searchParams.toString();

    return query ? `?${query}` : '';
  },
};
