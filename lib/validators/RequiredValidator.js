import Validator from './Validator'

export default class extends Validator {
  get defaultMessage() {
    return 'Please input :key:'
  }

  inspect() {
    this.isValid = !!this.value
  }
}
