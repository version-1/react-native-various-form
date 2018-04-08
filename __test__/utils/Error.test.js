import { NotImplementedError } from '../../lib/utils/Errors'

describe('#new', () => {
  describe('normal case', () => {
    it('throw NotImplementedError', () => {
      expect(() => {
        throw new NotImplementedError()
      }).toThrowError(Error)
    })
  })
})
