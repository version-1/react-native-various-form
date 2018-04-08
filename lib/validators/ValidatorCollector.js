import { filterKeys, isPresent, isObject } from '../utils/Object'
import ValidatorFactory from './ValidatorFactory'
import ChildValidator from './ChildValidator'

export default class {
  constructor(
    children,
    keyIndex = 'name',
    valueIndex = 'value',
    messageIndex = 'message'
  ) {
    this.children = children
    this.keyIndex = keyIndex
    this.valueIndex = valueIndex
    this.messageIndex = messageIndex
  }

  get validateKeys() {
    return ValidatorFactory.validatorKeys()
  }

  collect() {
    const objects = Array.isArray(this.children)
      ? this._flatten(this.children)
      : this.children.props && [this.children]

    return objects.reduce((acc, obj) => {
      if (obj.props[this.keyIndex]) {
        const result = {
          [obj.props[this.keyIndex]]: this._getValidatedParams(obj.props)
        }
        return { ...acc, ...result }
      }
      return acc
    }, {})
  }

  _flatten(children) {
    return children.reduce((acc, child) => {
      acc = [...acc, child]
      if (Array.isArray(child.props.children)) {
        acc = [...acc, ...this._flatten(child.props.children)]
      } else if (child.props.children && isObject(child.props.children)) {
        acc = [...acc, child.props.children]
      }
      return acc
    }, [])
  }

  _getValidatedParams(props) {
    return new ChildValidator(
      props[this.keyIndex],
      props[this.valueIndex],
      props[this.messageIndex],
      filterKeys(props, this.validateKeys)
    )
  }
}
