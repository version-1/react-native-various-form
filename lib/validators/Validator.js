import { NotImplementedError } from '../utils/Errors'

export default class {
  constructor(value, params = {}) {
    this.value = value
    this.isValid = true
    this.message = ''
    this.customMessage = params.message
  }

  validate() {
    this.inspect()
    this.setMesssage()
    return this.isValid
  }

  get result() {
    return { value: this.value, isValid: this.isValid, message: this.message }
  }

  get defaultMessage() {
    return ':key: is invalid'
  }

  messageWith(key) {
    return this.message.replace(':key:', key)
  }

  setMesssage() {
    if (!this.isValid) {
      if (this.customMessage) {
        this.message = this.customMessage
      } else {
        this.message = this.defaultMessage
      }
    }
  }

  inspect() {
    throw new NotImplementedError('please implement validate method.')
  }
}
