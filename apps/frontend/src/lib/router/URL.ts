export const URL = {
  /**
   * ルートページ
   */
  root() {
    return '/';
  },

  /**
   * 記事詳細ページ
   */
  articleDetail(articleId: string) {
    return `/articles/${articleId}`;
  },

  /**
   * 404ページ
   */
  notfound() {
    return '/404';
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
