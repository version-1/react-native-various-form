import Validator from './Validator'

export default class extends Validator {
  get defaultMessage() {
    return 'Please :key: is expected number format'
  }

  inspect() {
    this.isValid = !!this.value && !isNaN(this.value)
  }
}
