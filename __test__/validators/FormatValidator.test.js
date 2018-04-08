import FormatValidator from '../../lib/validators/FormatValidator'

describe('FormatValidator', () => {
  describe('#getRgexp', () => {
    describe('pass regexp', () => {
      const validator = new FormatValidator('hoge', {
        regexp: /[0-9]{3}[a-z]{3}/
      })
      it('return regexp', () => {
        expect(validator.getRegexp()).toEqual(/[0-9]{3}[a-z]{3}/)
      })
    })

    describe('pass str', () => {
      const validator = new FormatValidator('hoge', {
        regexp: '[0-9]{3}[a-z]{3}'
      })
      it('return regexp', () => {
        expect(validator.getRegexp()).toEqual(/[0-9]{3}[a-z]{3}/)
      })
    })

    describe('pass no regexp', () => {
      const validator = new FormatValidator('hoge')
      it('return regexp (?:)', () => {
        expect(validator.getRegexp()).toEqual(/(?:)/)
      })
    })
  })

  describe('#inspect', () => {
    describe('normal case', () => {
      describe('pass match value', () => {
        const validator = new FormatValidator('123abc', {
          regexp: /[0-9]{3}[a-z]{3}/
        })
        it('this.isVlaid is true', () => {
          validator.inspect()
          expect(validator.isValid).toBe(true)
        })
      })

      describe('pass unmatch value', () => {
        const validator = new FormatValidator('hoge', {
          regexp: /[0-9]{3}[a-z]{3}/
        })
        it('this.isVlaid is false', () => {
          validator.inspect()
          expect(validator.isValid).toBe(false)
        })
      })
    })

    describe('value is undefined', () => {
      const validator = new FormatValidator(undefined, {
        regexp: /[0-9]{3}[a-z]{3}/
      })
      it('this.isValid is false', () => {
        validator.inspect()
        expect(validator.isValid).toBe(false)
      })
    })
  })

  describe('#validate', () => {
    describe('normal case', () => {
      const validator = new FormatValidator('123abc', {
        regexp: /[0-9]{3}[a-z]{3}/
      })
      it('return true', () => {
        expect(validator.validate()).toBe(true)
        expect(validator.message).toBe('')
      })
    })
    describe('invalid case', () => {
      const validator = new FormatValidator('invalid', {
        regexp: /[0-9]{3}[a-z]{3}/
      })
      it('return false', () => {
        expect(validator.validate()).toBe(false)
        expect(validator.message).toBe(':key: is invalid format')
      })

      describe('with message', () => {
        const validator = new FormatValidator('invalid', {
          regexp: /[0-9]{3}[a-z]{3}/,
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
      const validator = new FormatValidator('valid', {
        regexp: /[0-9]{3}[a-z]{3}/,
        message: 'This is custom Message'
      })
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
        const validator = new FormatValidator('123abc', {
          regexp: /[0-9]{3}[a-z]{3}/
        })
        it('return result object', () => {
          validator.validate()
          expect(validator.result).toEqual({
            value: '123abc',
            isValid: true,
            message: ''
          })
        })
      })

      describe('invalid value', () => {
        const validator = new FormatValidator('invalid', {
          regexp: /[0-9]{3}[a-z]{3}/
        })
        it('return result object', () => {
          validator.validate()
          expect(validator.result).toEqual({
            value: 'invalid',
            isValid: false,
            message: ':key: is invalid format'
          })
        })
      })
    })
  })

  describe('#messageWith', () => {
    const validator = new FormatValidator('invalid', {
      regexp: '[0-9]{3}[a-z]{3}'
    })
    describe('before validate', () => {
      it('return emptyr string', () => {
        expect(validator.messageWith('email')).toBe('')
      })
    })
    describe('after validate', () => {
      it('return message with key', () => {
        validator.validate()
        expect(validator.messageWith('email')).toBe('email is invalid format')
      })
    })
  })

  describe('#defaultMessage', () => {
    const validator = new FormatValidator('hoge', {
      regexp: '[0-9]{3}[a-z]{3}'
    })
    it('return defaultMessage', () => {
      expect(validator.defaultMessage).toBe(`:key: is invalid format`)
    })
  })
})
