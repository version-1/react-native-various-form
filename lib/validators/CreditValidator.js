import FormatValidator from './FormatValidator'

export const CREDIT_REGEXP = /[0-9]{4}-[0-9]{4}-[0-9]{4}-[0-9]{4}/
export default class extends FormatValidator {
  get defaultMessage() {
    return ':key: is invalid Credit Card Number Format'
  }

  getRegexp() {
    this.regexp = CREDIT_REGEXP
    return super.getRegexp()
  }
}
