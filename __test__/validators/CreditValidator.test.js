import CreditValidator, {
  CREDIT_REGEXP
} from '../../lib/validators/CreditValidator'

describe('CreditValidator', () => {
  describe('#getRgexp', () => {
    describe('pass no type', () => {
      const validator = new CreditValidator('hoge@example.com')
      it('return CREDIT_REGEXP regexp', () => {
        expect(validator.getRegexp()).toEqual(CREDIT_REGEXP)
      })
    })
  })

  describe('#validate', () => {
    describe('normal case', () => {
      describe('pass match value', () => {
        describe('normal value', () => {
          const validator = new CreditValidator('1234-1234-1234-1234')
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
          const validator = new CreditValidator('1234-1234-1234-abcd')
          it('this.isValid false', () => {
            validator.validate()
            expect(validator.isValid).toBe(false)
          })
        })
        describe('special chars', () => {
          const validator = new CreditValidator("a-zA-Z0-9.!#$%&'*+/=?^_`")
          it('this.isValid true', () => {
            validator.validate()
            expect(validator.isValid).toBe(false)
          })
        })

        describe('without hyphen', () => {
          const validator = new CreditValidator('1234512345123451234')
          it('this.isValid false', () => {
            validator.validate()
            expect(validator.isValid).toBe(false)
          })
        })
        describe('without before hyphen', () => {
          const validator = new CreditValidator('-1234-1234-12341234')
          it('this.isValid false', () => {
            validator.validate()
            expect(validator.isValid).toBe(false)
          })
        })
        describe('without after hyphen', () => {
          const validator = new CreditValidator('1234-1234-123-1234-')
          it('this.isValid false', () => {
            validator.validate()
            expect(validator.isValid).toBe(false)
          })
        })

        describe('include space', () => {
          const validator = new CreditValidator('123 -1234-1234-1234')
          it('this.isValid false', () => {
            validator.validate()
            expect(validator.isValid).toBe(false)
          })
        })
        describe('include char', () => {
          const validator = new CreditValidator('1234-1234-1234-abcd')
          it('this.isValid false', () => {
            validator.validate()
            expect(validator.isValid).toBe(false)
          })
        })
      })

      describe('pass undefined value', () => {
        const validator = new CreditValidator(undefined)
        it('this.isValid false', () => {
          validator.validate()
          expect(validator.isValid).toBe(false)
        })
      })
    })
  })

  describe('#defaultMessage', () => {
    const validator = new CreditValidator('hoge')
    it('return defaultMessage', () => {
      expect(validator.defaultMessage).toBe(
        ':key: is invalid Credit Card Number Format'
      )
    })
  })
})
