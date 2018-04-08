import NumericValidator from '../../lib/validators/NumericValidator'

describe('NumericValidator', () => {
  describe('#inspect', () => {
    describe('normal case', () => {
      describe('pass match value', () => {
        const validator = new NumericValidator('123')
        it('this.isVlaid is true', () => {
          validator.inspect()
          expect(validator.isValid).toBe(true)
        })
      })

      describe('pass string', () => {
        const validator = new NumericValidator('abc')
        it('this.isVlaid is false', () => {
          validator.inspect()
          expect(validator.isValid).toBe(false)
        })
      })

      describe('pass empty string', () => {
        const validator = new NumericValidator('')
        it('this.isVlaid is false', () => {
          validator.inspect()
          expect(validator.isValid).toBe(false)
        })
      })

      describe('pass undefined', () => {
        const validator = new NumericValidator(undefined, {
          regexp: /[0-9]{3}[a-z]{3}/
        })
        it('this.isValid is false', () => {
          validator.inspect()
          expect(validator.isValid).toBe(false)
        })
      })
    })
  })

  describe('#validate', () => {
    describe('normal case', () => {
      const validator = new NumericValidator('123')
      it('return true', () => {
        expect(validator.validate()).toBe(true)
        expect(validator.message).toBe('')
      })
    })
    describe('invalid case', () => {
      const validator = new NumericValidator('abc')
      it('return false', () => {
        expect(validator.validate()).toBe(false)
        expect(validator.message).toBe('Please :key: is expected number format')
      })

      describe('with message', () => {
        const validator = new NumericValidator('abc', {
          message: 'This is custom Message'
        })
        it('return false', () => {
          expect(validator.validate()).toBe(false)
          expect(validator.message).toBe('This is custom Message')
        })
      })
    })
  })

  describe('#result', () => {
    describe('before validate', () => {
      const validator = new NumericValidator('123')
      it('return false', () => {
        expect(validator.result).toEqual({
          value: '123',
          isValid: true,
          message: ''
        })
      })
    })

    describe('after validate', () => {
      describe('valid value', () => {
        const validator = new NumericValidator('123')
        it('return result object', () => {
          validator.validate()
          expect(validator.result).toEqual({
            value: '123',
            isValid: true,
            message: ''
          })
        })
      })

      describe('invalid value', () => {
        const validator = new NumericValidator('abc')
        it('return result object', () => {
          validator.validate()
          expect(validator.result).toEqual({
            value: 'abc',
            isValid: false,
            message: 'Please :key: is expected number format'
          })
        })
      })
    })
  })

  describe('#defaultMessage', () => {
    const validator = new NumericValidator('abc')
    it('return defaultMessage', () => {
      expect(validator.defaultMessage).toBe(
        'Please :key: is expected number format'
      )
    })
  })
})
