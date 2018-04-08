import { insert, insertDelimiter } from '../../lib/utils/Text'

describe('#insert', () => {
  it('insert - under index', () => {
    expect(insert('abcd', '-', -1)).toBe('-abcd')
  })
  it('insert - at 0 index', () => {
    expect(insert('abcd', '-', 0)).toBe('-abcd')
  })
  it('insert - ', () => {
    expect(insert('abcd', '-', 2)).toBe('ab-cd')
  })
  it('insert - length max', () => {
    expect(insert('abcd', '-', 4)).toBe('abcd-')
  })
  it('insert - over index', () => {
    expect(insert('abcd', '-', 5)).toBe('abcd-')
  })
})

describe('#insertDelimiter', () => {
  describe('normal', () => {
    it('return str delimted by hyphen ', () => {
      expect(insertDelimiter('01234567890', [3, 7], '-')).toBe('012-3456-7890')
    })

    it('return str delimted by hyphen ', () => {
      expect(insertDelimiter('1234123412341234', [4, 8, 12], '-')).toBe(
        '1234-1234-1234-1234'
      )
    })
  })

  describe('pass empty intervals', () => {
    it('return str not delimted by hyphen ', () => {
      expect(insertDelimiter('1234123412341234', [], '-')).toBe(
        '1234123412341234'
      )
    })
  })

  describe('normal without delimiter params', () => {
    it('normal without params', () => {
      expect(insertDelimiter('01234567890', [3, 7])).toBe('012 3456 7890')
    })
  })

  describe('length of delimiter is more than 1', () => {
    it('throw TypeError', () => {
      expect(() => insertDelimiter('01234567890', [3, 7], '--')).toThrowError(
        TypeError
      )
    })
  })
})
