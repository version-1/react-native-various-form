import FormatValidator from './FormatValidator'

export const NATIONAL_PHONE_NUMBER_REGEXP = /^[0-9]{2,3}[-\s][0-9]{4}[-\s][0-9]{4}$/
export const COMMON_PHONE_NUMBER_REGEXP = /^\+[0-9]{2}[- ][0-9]{1,2}[- ][0-9]{4}[- ][0-9]{4}$/

export default class extends FormatValidator {
  constructor(value, params = {}) {
    super(value, params)
    this.type = params.type || 'common'
  }
  get defaultMessage() {
    return ':key: is invalid Phone Number Format'
  }

  get phoneNumberTypes() {
    return {
      national: NATIONAL_PHONE_NUMBER_REGEXP,
      common: COMMON_PHONE_NUMBER_REGEXP
    }
  }

  getRegexp() {
    this.regexp = this.phoneNumberTypes[this.type]
    return super.getRegexp()
  }
}
