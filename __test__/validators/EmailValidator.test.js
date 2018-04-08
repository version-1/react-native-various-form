import EmailValidator, {
  EMAIL_REGEXP
} from '../../lib/validators/EmailValidator'

describe('EmailValidator', () => {
  describe('#getRgexp', () => {
    describe('pass no type', () => {
      const validator = new EmailValidator('hoge@example.com')
      it('return EMAIL_REGEXP regexp', () => {
        expect(validator.getRegexp()).toEqual(EMAIL_REGEXP)
      })
    })
  })

  describe('#validate', () => {
    describe('normal case', () => {
      describe('pass match value', () => {
        describe('normal value', () => {
          const validator = new EmailValidator('hoge@example.com')
          it('this.isValid true', () => {
            validator.validate()
            expect(validator.isValid).toBe(true)
          })
        })
        describe('special chars', () => {
          const validator = new EmailValidator(
            "a-zA-Z0-9.!#$%&'*+/=?^_`@example.com"
          )
          it('this.isValid true', () => {
            validator.validate()
            expect(validator.isValid).toBe(true)
          })
        })
      })
    })
    describe('abnormal case', () => {
      describe('pass unmatch value', () => {
        describe('without dot', () => {
          const validator = new EmailValidator('hoge@example')
          it('this.isValid false', () => {
            validator.validate()
            expect(validator.isValid).toBe(false)
          })
        })

        describe('without @', () => {
          const validator = new EmailValidator('hoge')
          it('this.isValid false', () => {
            validator.validate()
            expect(validator.isValid).toBe(false)
          })
        })
        describe('without before dot', () => {
          const validator = new EmailValidator('hoge@.com')
          it('this.isValid false', () => {
            validator.validate()
            expect(validator.isValid).toBe(false)
          })
        })
        describe('without before @', () => {
          const validator = new EmailValidator('@example.com')
          it('this.isValid false', () => {
            validator.validate()
            expect(validator.isValid).toBe(false)
          })
        })

        describe('include space', () => {
          const validator = new EmailValidator('hoge @example.com')
          it('this.isValid false', () => {
            validator.validate()
            expect(validator.isValid).toBe(false)
          })
        })
      })

      describe('pass undefined value', () => {
        const validator = new EmailValidator(undefined)
        it('this.isValid false', () => {
          validator.validate()
          expect(validator.isValid).toBe(false)
        })
      })
    })
  })

  describe('#defaultMessage', () => {
    const validator = new EmailValidator('hoge')
    it('return defaultMessage', () => {
      expect(validator.defaultMessage).toBe(':key: is invalid Email Format')
    })
  })
})
