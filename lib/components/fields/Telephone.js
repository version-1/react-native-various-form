import Base from './Base'
import { TELEPHONE } from '../../utils/Constants'

export default class Telephone extends Base {
  delimiter() {
    return this.props.delimiter || TELEPHONE.delimiter
  }

  intervals() {
    return TELEPHONE.intervals
  }

  maxLength() {
    return TELEPHONE.maxLength
  }

  placeholder() {
    return this.props.placeholder || TELEPHONE.placeholder
  }

  keyboardType() {
    return this.props.keyboardType || TELEPHONE.keyboardType
  }
}
