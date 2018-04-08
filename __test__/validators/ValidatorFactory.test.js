import ValidatorFactory from '../../lib/validators/ValidatorFactory'
import RequiredValidator from '../../lib/validators/RequiredValidator'
import NumericValidator from '../../lib/validators/NumericValidator'
import FormatValidator from '../../lib/validators/FormatValidator'
import PhoneNumberValidator from '../../lib/validators/PhoneNumberValidator'
import CreditValidator from '../../lib/validators/CreditValidator'
import ZipcodeValidator from '../../lib/validators/ZipcodeValidator'
import EmailValidator from '../../lib/validators/EmailValidator'

describe('ValidatorFactory', () => {
  describe('#validatorKeys', () => {
    it('keys', () => {
      expect(ValidatorFactory.validatorKeys()).toEqual([
        'required',
        'numeric',
        'format',
        'phoneNumber',
        'credit',
        'email',
        'zipcode'
      ])
    })
  })

  describe('#validators', () => {
    it('keys', () => {
      expect(ValidatorFactory.validators).toEqual({
        required: RequiredValidator,
        numeric: NumericValidator,
        format: FormatValidator,
        phoneNumber: PhoneNumberValidator,
        credit: CreditValidator,
        email: EmailValidator,
        zipcode: ZipcodeValidator
      })
    })
  })

  describe('#create', () => {
    describe('normal case', () => {
      it('return RequiredValidator class', () => {
        expect(
          ValidatorFactory.create('required', '') instanceof RequiredValidator
        ).toBe(true)
      })
    })
    describe('abnormal case', () => {
      it('raise Error', () => {
        expect(() => ValidatorFactory.create('invalid', '')).toThrowError(
          'Not found invalid validator'
        )
      })
    })
  })
})
