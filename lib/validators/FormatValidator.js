import Validator from './Validator'

export default class extends Validator {
  constructor(value, params = {}) {
    super(value, params)
    this.regexp = params.regexp
  }

  get defaultMessage() {
    return `:key: is invalid format`
  }

  inspect() {
    this.isValid = !!this.value && !!this.value.match(this.getRegexp())
  }

  getRegexp() {
    return new RegExp(this.regexp)
  }
}
