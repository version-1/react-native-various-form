import PhoneNumberValidator, {
  NATIONAL_PHONE_NUMBER_REGEXP,
  COMMON_PHONE_NUMBER_REGEXP
} from '../../lib/validators/PhoneNumberValidator'

describe('PhoneNumberValidator', () => {
  describe('#getRgexp', () => {
    describe('pass no type', () => {
      const validator = new PhoneNumberValidator('+81-00-0000-0000')
      it('return common number format regexp', () => {
        expect(validator.getRegexp()).toEqual(COMMON_PHONE_NUMBER_REGEXP)
      })
    })

    describe('pass natinal type', () => {
      const validator = new PhoneNumberValidator('000-0000-0000', {
        type: 'national'
      })
      it('return common number format regexp', () => {
        expect(validator.getRegexp()).toEqual(NATIONAL_PHONE_NUMBER_REGEXP)
      })
    })

    describe('pass common type', () => {
      const validator = new PhoneNumberValidator('000-0000-0000', {
        type: 'common'
      })
      it('return common number format regexp', () => {
        expect(validator.getRegexp()).toEqual(COMMON_PHONE_NUMBER_REGEXP)
      })
    })
  })

  describe('#validate', () => {
    describe('national type', () => {
      describe('normal case', () => {
        describe('pass match value', () => {
          const validator = new PhoneNumberValidator('080-0000-0000', {
            type: 'national'
          })
          it('this.isValid true', () => {
            expect(validator.validate()).toBe(true)
            expect(validator.isValid).toBe(true)
          })
        })

        describe('pass common value', () => {
          const validator = new PhoneNumberValidator('+81-0000-0000-0000', {
            type: 'national'
          })
          it('this.isVlaid is true', () => {
            validator.validate()
            expect(validator.isValid).toBe(false)
          })
        })

        describe('pass unmatch value', () => {
          const validator = new PhoneNumberValidator('invalid', {
            type: 'national'
          })
          it('this.isVlaid is false', () => {
            validator.validate()
            expect(validator.isValid).toBe(false)
          })
        })
      })
    })

    describe('common type', () => {
      describe('normal case', () => {
        describe('pass match value', () => {
          const validator = new PhoneNumberValidator('+81-01-0000-0000')
          it('this.isValid is true', () => {
            validator.validate()
            expect(validator.isValid).toBe(true)
          })
        })

        describe('pass match value', () => {
          const validator = new PhoneNumberValidator('+81-01-0000-0000', {
            type: 'common'
          })
          it('this.isValid is true', () => {
            validator.validate()
            expect(validator.isValid).toBe(true)
          })
        })

        const validator = new PhoneNumberValidator('+81-01-0000-0000', {
          type: 'invalid'
        })
        it('this.isValid is true', () => {
          validator.validate()
          expect(validator.isValid).toBe(true)
        })
      })

      describe('pass national type value', () => {
        const validator = new PhoneNumberValidator('080-0000-0000')
        it('this.isValid is true', () => {
          validator.validate()
          expect(validator.isValid).toBe(false)
        })
      })

      describe('pass unmatch value', () => {
        const validator = new PhoneNumberValidator('invalid')
        it('this.isVlaid is false', () => {
          validator.validate()
          expect(validator.isValid).toBe(false)
        })
      })
    })
  })

  describe('#result', () => {
    describe('before validate', () => {
      const validator = new PhoneNumberValidator('+81-00-0000-0000')
      it('return object', () => {
        expect(validator.result).toEqual({
          value: '+81-00-0000-0000',
          isValid: true,
          message: ''
        })
      })
    })

    describe('after validate', () => {
      describe('valid value', () => {
        const validator = new PhoneNumberValidator('+81-00-0000-0000')
        it('return result object', () => {
          validator.validate()
          expect(validator.result).toEqual({
            value: '+81-00-0000-0000',
            isValid: true,
            message: ''
          })
        })
      })
      describe('invalid value', () => {
        const validator = new PhoneNumberValidator('invalid')
        it('return result object', () => {
          validator.validate()
          expect(validator.result).toEqual({
            value: 'invalid',
            isValid: false,
            message: ':key: is invalid Phone Number Format'
          })
        })
      })
    })
  })

  describe('#defaultMessage', () => {
    const validator = new PhoneNumberValidator('hoge')
    it('return defaultMessage', () => {
      expect(validator.defaultMessage).toBe(
        ':key: is invalid Phone Number Format'
      )
    })
  })
})
