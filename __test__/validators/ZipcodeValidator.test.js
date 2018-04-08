import ZipcodeValidator, {
  ZIPCODE_REGEXP
} from '../../lib/validators/ZipcodeValidator'

describe('ZipcodeValidator', () => {
  describe('#getRgexp', () => {
    describe('pass no type', () => {
      const validator = new ZipcodeValidator('hoge@example.com')
      it('return ZIPCODE_REGEXP regexp', () => {
        expect(validator.getRegexp()).toEqual(ZIPCODE_REGEXP)
      })
    })
  })

  describe('#validate', () => {
    describe('normal case', () => {
      describe('pass match value', () => {
        describe('normal value', () => {
          const validator = new ZipcodeValidator('123-1234')
          it('this.isValid true', () => {
            validator.validate()
            expect(validator.isValid).toBe(true)
          })
        })
      })
    })
    describe('abnormal case', () => {
      describe('pass unmatch value', () => {
        describe('short of digit', () => {
          const validator = new ZipcodeValidator('123-123')
          it('this.isValid false', () => {
            validator.validate()
            expect(validator.isValid).toBe(false)
          })
        })
        describe('special chars', () => {
          const validator = new ZipcodeValidator("a-zA-Z0-9.!#$%&'*+/=?^_`")
          it('this.isValid true', () => {
            validator.validate()
            expect(validator.isValid).toBe(false)
          })
        })

        describe('without hyphen', () => {
          const validator = new ZipcodeValidator('1234567')
          it('this.isValid false', () => {
            validator.validate()
            expect(validator.isValid).toBe(false)
          })
        })
        describe('without before hyphen', () => {
          const validator = new ZipcodeValidator('-1234')
          it('this.isValid false', () => {
            validator.validate()
            expect(validator.isValid).toBe(false)
          })
        })
        describe('without after hyphen', () => {
          const validator = new ZipcodeValidator('123-')
          it('this.isValid false', () => {
            validator.validate()
            expect(validator.isValid).toBe(false)
          })
        })

        describe('include space', () => {
          const validator = new ZipcodeValidator('12 -123')
          it('this.isValid false', () => {
            validator.validate()
            expect(validator.isValid).toBe(false)
          })
        })
        describe('include char', () => {
          const validator = new ZipcodeValidator('1bc-123')
          it('this.isValid false', () => {
            validator.validate()
            expect(validator.isValid).toBe(false)
          })
        })
      })

      describe('pass undefined value', () => {
        const validator = new ZipcodeValidator(undefined)
        it('this.isValid false', () => {
          validator.validate()
          expect(validator.isValid).toBe(false)
        })
      })
    })
  })

  describe('#defaultMessage', () => {
    const validator = new ZipcodeValidator('hoge')
    it('return defaultMessage', () => {
      expect(validator.defaultMessage).toBe(':key: is invalid Zip Code Format')
    })
  })
})
