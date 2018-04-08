import Base from './Base'
import { SHORT_YEAR, MONTH, SLASH } from '../../../utils/Constants'

export default class ShortYearMonth extends Base {
  constructor(props) {
    super(props)
  }

  get inputs() {
    return [
      {
        value: this.slicedYear,
        attr: SHORT_YEAR,
        getValue: text => `${text}${SLASH}${this.month}`
      },
      {
        value: this.month,
        attr: MONTH,
        getValue: text => `${this.slicedYear}${SLASH}${text}`
      }
    ]
  }
}
