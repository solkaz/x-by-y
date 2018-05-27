import { createXByYMap, XByYMap } from '../src';

interface Item {
  id: number;
}

describe('x-by-y tests', () => {
  describe('XByYMap', () => {
    it('is just an ES6 Map', () => {
      const foo: XByYMap<number, Item> = new Map<number, Item>([]);
      const bar: XByYMap<number, Item> = new Map([]);
      const baz: Map<number, Item> = new Map([]) as XByYMap<number, Item>;
      const qux: Map<number, Item> = new Map<number, Item>([]) as XByYMap<
        number,
        Item
      >;
    });
  });
});
