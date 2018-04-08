import {
  filterKeys,
  isEmpty,
  isPresent,
  isObject
} from '../../lib/utils/Object'

describe('#filterKeys', () => {
  const obj = { a: 1, b: 2, c: 3, d: 4 }

  describe('normal case', () => {
    const array = ['a', 'b', 'c']
    it('return pointed object', () => {
      expect(filterKeys(obj, array)).toEqual({ a: 1, b: 2, c: 3 })
    })

    it('return pointed object', () => {
      expect(filterKeys(obj, [])).toEqual({})
    })

    it('return pointed object', () => {
      expect(filterKeys({}, array)).toEqual({})
    })
  })
})

describe('#isEmpty', () => {
  describe('normal case', () => {
    it('return true', () => {
      expect(isEmpty({})).toBe(true)
    })
    it('return false', () => {
      expect(isEmpty({ a: 1 })).toBe(false)
    })
  })
})

describe('#isPresent', () => {
  describe('normal case', () => {
    it('return true', () => {
      expect(isPresent({ a: 1 })).toBe(true)
    })
    it('return false', () => {
      expect(isPresent({})).toBe(false)
    })
  })
})

describe('#isObject', () => {
  describe('normal case', () => {
    it('return true', () => {
      expect(isObject({ a: 1 })).toBe(true)
    })
    it('return false', () => {
      expect(isObject([1, 2, 3])).toBe(false)
    })
    it('return false', () => {
      expect(isObject('string')).toBe(false)
    })
    it('return false', () => {
      expect(isObject(0)).toBe(false)
    })
    it('return false', () => {
      expect(isObject(true)).toBe(false)
    })
    it('return false', () => {
      expect(isObject(undefined)).toBe(false)
    })
  })
})
