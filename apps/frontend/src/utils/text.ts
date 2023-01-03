/**
 * 日本語を含むか
 */
export const hasJa = (text: string | undefined | null): boolean => {
  return text
    ? !!text.match(/^(?=.*[\u3041-\u3096]).*$|^(?=.*[\u30A1-\u30FA]).*$|^(?=.*[\u4E00-\u9FFF]).*$/g)
    : false;
};

/**
 * 文字数カウント
 */
export const countText = (text: string | undefined | null): number => {
  return text ? [...text].length : 0;
};
