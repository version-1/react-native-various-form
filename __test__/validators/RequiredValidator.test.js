import RequiredValidator from '../../lib/validators/RequiredValidator'

describe('RequiredValidator', () => {
  describe('#inspect', () => {
    describe('normal case', () => {
      describe('pass match value', () => {
        const validator = new RequiredValidator('123abc')
        it('this.isVlaid is true', () => {
          validator.inspect()
          expect(validator.isValid).toBe(true)
        })
      })

      describe('pass empty string', () => {
        const validator = new RequiredValidator('')
        it('this.isVlaid is false', () => {
          validator.inspect()
          expect(validator.isValid).toBe(false)
        })
      })
      describe('pass undefined', () => {
        const validator = new RequiredValidator(undefined)
        it('this.isValid is false', () => {
          validator.inspect()
          expect(validator.isValid).toBe(false)
        })
      })
    })
  })

  describe('#validate', () => {
    describe('normal case', () => {
      const validator = new RequiredValidator('123abc')
      it('return true', () => {
        expect(validator.validate()).toBe(true)
        expect(validator.message).toBe('')
      })
    })
    describe('invalid case', () => {
      const validator = new RequiredValidator('')
      it('return false', () => {
        expect(validator.validate()).toBe(false)
        expect(validator.message).toBe(`Please input :key:`)
      })

      describe('with message', () => {
        const validator = new RequiredValidator('', {
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
      const validator = new RequiredValidator('valid')
      it('return false', () => {
        expect(validator.result).toEqual({
          value: 'valid',
          isValid: true,
          message: ''
        })
      })
    })

    describe('after validate', () => {
      describe('valid value', () => {
        const validator = new RequiredValidator('valid')
        it('return result object', () => {
          validator.validate()
          expect(validator.result).toEqual({
            value: 'valid',
            isValid: true,
            message: ''
          })
        })
      })

      describe('invalid value', () => {
        const validator = new RequiredValidator('')
        it('return result object', () => {
          validator.validate()
          expect(validator.result).toEqual({
            value: '',
            isValid: false,
            message: `Please input :key:`
          })
        })
      })
    })
  })

  describe('#defaultMessage', () => {
    const validator = new RequiredValidator('hoge')
    it('return defaultMessage', () => {
      expect(validator.defaultMessage).toBe(`Please input :key:`)
    })
  })
})
