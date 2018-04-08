import Validator from '../../lib/validators/Validator'

describe('Validator', () => {
  const validator = new Validator('hoge', { message: 'Hello World' })

  describe('#inspect', () => {
    it('throw Error', () => {
      expect(() => validator.inspect()).toThrowError(
        'please implement validate method.'
      )
    })
  })

  describe('#validate', () => {
    it('throw Error', () => {
      expect(() => validator.validate()).toThrowError(
        'please implement validate method.'
      )
    })
  })

  describe('#defaultMessage', () => {
    it('return defaultMessage', () => {
      expect(validator.defaultMessage).toBe(':key: is invalid')
    })
  })

  describe('#result', () => {
    it('raise no error', () => {
      expect(validator.result).toEqual({
        value: 'hoge',
        isValid: true,
        message: ''
      })
    })
  })
})
