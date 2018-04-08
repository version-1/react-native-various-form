import { NotImplementedError } from '../utils/Errors'
import RequiredValidator from './RequiredValidator'
import NumericValidator from './NumericValidator'
import FormatValidator from './FormatValidator'
import PhoneNumberValidator from './PhoneNumberValidator'
import CreditValidator from './CreditValidator'
import ZipcodeValidator from './ZipcodeValidator'
import EmailValidator from './EmailValidator'

export default class ValidatorFactory {
  static get validators() {
    return {
      required: RequiredValidator,
      numeric: NumericValidator,
      format: FormatValidator,
      phoneNumber: PhoneNumberValidator,
      credit: CreditValidator,
      email: EmailValidator,
      zipcode: ZipcodeValidator
    }
  }

  static validatorKeys() {
    return Object.keys(this.validators)
  }

  static create(validator, value, params = {}) {
    // FIXME: please implement Custom Error Class
    if (!this.validators[validator])
      throw new Error(`Not found ${validator} validator`)
    const klass = this.validators[validator]
    return new klass(value, params)
  }
}
