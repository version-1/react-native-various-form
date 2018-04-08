import { isPresent } from '../../utils/Object'

export default class {
  constructor(targets) {
    this.targets = this._inspect(targets)
  }

  /** validate form
   */
  validate() {
    const errors = Object.keys(this.targets).reduce((acc, key) => {
      const results = this.targets[key].validate()

      if (isPresent(results)) {
        acc[key] = {
          ...{ base: this.targets[key].message },
          ...results
        }
      }
      return acc
    }, {})

    return {
      result: !this._hasErrors(errors),
      errors,
      messages: this._buildMessage(errors)
    }
  }

  _inspect(targets) {
    Object.values(targets).map(value => {
      if (!(value.validate instanceof Function)) {
        throw new TypeError(
          'validators must have validate Function type property'
        )
      }
      if (!(typeof value.message === 'string')) {
        throw new TypeError("validators don't have message property")
      }
    })

    return targets
  }

  _hasErrors(errors) {
    return Object.keys(errors).filter(key => isPresent(errors[key])).length
  }

  _buildMessage(errors) {
    return Object.keys(errors).reduce((acc, key) => {
      return [...acc, ...Object.values(errors[key])]
    }, [])
  }
}
