import 'core-js/fn/map';

export type XByYMap<Y extends X[keyof X], X> = Map<Y, X>;

export function createXByYMap<Y extends X[K], X, K extends keyof X>(
  key: K,
  objects: X[]
): XByYMap<Y, X> {
  return new Map<Y, X>(objects.map((obj) => [obj[key], obj]) as Array<[Y, X]>);
}
