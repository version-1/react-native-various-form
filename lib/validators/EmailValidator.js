import FormatValidator from './FormatValidator'

export const EMAIL_REGEXP = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)+$/
export default class extends FormatValidator {
  get defaultMessage() {
    return ':key: is invalid Email Format'
  }

  getRegexp() {
    this.regexp = EMAIL_REGEXP
    return super.getRegexp()
  }
}
