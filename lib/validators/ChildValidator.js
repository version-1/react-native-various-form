import ValidatorFactory from './ValidatorFactory'
export default class {
  constructor(key, value, message, validators) {
    this.key = key
    this.value = value
    this.message = message || `${key} is invalid`
    this.validators = validators
  }

  validate() {
    return Object.keys(this.validators).reduce((acc, validator, index) => {
      const validatorClass = ValidatorFactory.create(
        validator,
        this.value,
        this.validators[validator]
      )
      if (!validatorClass.validate()) {
        return {
          ...acc,
          ...{ [validator]: validatorClass.messageWith(this.key) }
        }
      }
      return acc
    }, {})
  }
}
