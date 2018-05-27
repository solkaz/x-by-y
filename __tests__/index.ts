import { createXByYMap, XByYMap } from '../src';

interface Item {
  id: number;
}

describe('x-by-y tests', () => {
  describe('XByYMap', () => {
    it('is just an ES6 Map', () => {
      const foo: XByYMap<number, Item> = new Map<number, Item>([]);
    });
  });
});
