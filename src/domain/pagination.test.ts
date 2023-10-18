import { getPaginationItems } from './pagination'

describe('Test get pagination items', () => {
  describe('Max length is greater or equal than last page', () => {
    test('last page is less than maxLength', () => {
      expect(getPaginationItems(1, 5, 7)).toEqual([1, 2, 3, 4, 5])
    })
    test('Last page is equal to maxLength', () => {
      expect(getPaginationItems(1, 5, 7)).toEqual([1, 2, 3, 4, 5])
    })
  })
  describe('Handle ellipsis in the middle', () => {
    test('Current page is near the beginning', () => {
      expect(getPaginationItems(1, 10, 7)).toEqual([1, 2, 3, NaN, 8, 9, 10])
    })
    test('Current page is near the end', () => {
      expect(getPaginationItems(9, 10, 7)).toEqual([1, 2, 3, NaN, 8, 9, 10])
    })
  })
  describe('Handle two ellipsises', () => {
    expect(getPaginationItems(5, 10, 7)).toEqual([1, NaN, 4, 5, 6, NaN, 10])
    expect(getPaginationItems(6, 10, 7)).toEqual([1, NaN, 5, 6, 7, NaN, 10])
  })
  describe('One ellipsis near the end', () => {
    expect(getPaginationItems(3, 10, 7)).toEqual([1, 2, 3, 4, NaN, 9, 10])
    expect(getPaginationItems(4, 10, 7)).toEqual([1, 2, 3, 4, 5, NaN, 10])
  })
  describe('One ellipsis near the start', () => {
    expect(getPaginationItems(7, 10, 7)).toEqual([1, NaN, 6, 7, 8, 9, 10])
    expect(getPaginationItems(8, 10, 7)).toEqual([1, 2, NaN, 7, 8, 9, 10])
  })
})
