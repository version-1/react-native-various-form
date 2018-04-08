import FormatValidator from './FormatValidator'

export const ZIPCODE_REGEXP = /[0-9]{3}-[0-9]{4}/
export default class extends FormatValidator {
  get defaultMessage() {
    return ':key: is invalid Zip Code Format'
  }

  getRegexp() {
    this.regexp = ZIPCODE_REGEXP
    return super.getRegexp()
  }
}
