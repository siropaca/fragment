import { countText, hasJa } from './text';

describe('Text', () => {
  /**
   * hasJa()
   */
  describe('hasJa()', () => {
    it('falseが返るか', () => {
      expect(hasJa(undefined)).toBeFalsy();
    });

    it('falseが返るか', () => {
      expect(hasJa(null)).toBeFalsy();
    });

    it('falseが返るか', () => {
      expect(hasJa('')).toBeFalsy();
    });

    it('trueが返るか', () => {
      expect(hasJa('あいうえお')).toBeTruthy();
    });

    it('trueが返るか', () => {
      expect(hasJa('アイウエオ')).toBeTruthy();
    });

    it('trueが返るか', () => {
      expect(hasJa('漢字')).toBeTruthy();
    });

    it('falseが返るか', () => {
      expect(hasJa('abcdefg')).toBeFalsy();
    });

    it('trueが返るか', () => {
      expect(hasJa('あいうえおアイウエオ漢字')).toBeTruthy();
    });

    it('trueが返るか', () => {
      expect(hasJa('あいうえおアイウエオ漢字abcdefg')).toBeTruthy();
    });
  });

  /**
   * countText()
   */
  describe('countText()', () => {
    it('正しく文字数をカウントできるか', () => {
      expect(countText(undefined)).toEqual(0);
    });

    it('正しく文字数をカウントできるか', () => {
      expect(countText(null)).toEqual(0);
    });

    it('正しく文字数をカウントできるか', () => {
      expect(countText(null)).toEqual(0);
    });

    it('正しく文字数をカウントできるか', () => {
      expect(countText('あいうえお')).toEqual(5);
    });

    it('正しく文字数をカウントできるか', () => {
      expect(countText('アイウエオ')).toEqual(5);
    });

    it('正しく文字数をカウントできるか', () => {
      expect(countText('漢字')).toEqual(2);
    });

    it('正しく文字数をカウントできるか', () => {
      expect(countText('abcdefg')).toEqual(7);
    });

    it('正しく文字数をカウントできるか', () => {
      expect(countText('😆')).toEqual(1);
    });
  });
});
