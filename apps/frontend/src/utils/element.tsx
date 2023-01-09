import React, { ReactNode } from 'react';

/**
 * childrenから対象の要素を取得する
 */
export const findElement = <P,>(
  childElements: Array<Exclude<ReactNode, boolean | null | undefined>>,
  targetElement: (props: undefined) => JSX.Element,
): (JSX.Element & { props: P }) | undefined => {
  if (!childElements) return undefined;

  return childElements.find((child) => {
    return React.isValidElement(child) ? child.type === targetElement : false;
  }) as (JSX.Element & { props: P }) | undefined;
};

/**
 * childrenから対象の要素を抽出する
 */
export const filterElement = <P,>(
  childElements: Array<Exclude<ReactNode, boolean | null | undefined>>,
  targetElement: (props: undefined) => JSX.Element,
): (JSX.Element & { props: P })[] | undefined => {
  if (!childElements) return undefined;

  return childElements.filter((child) => {
    return React.isValidElement(child) ? child.type === targetElement : false;
  }) as (JSX.Element & { props: P })[] | undefined;
};
