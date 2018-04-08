import Base from './Base'
import { SHORT_YEAR, MONTH, SLASH } from '../../../utils/Constants'

export default class ShortMonthYear extends Base {
  constructor(props) {
    super(props)
  }

  get inputs() {
    return [
      {
        value: this.month,
        attr: MONTH,
        getValue: text => `${this.slicedYear}${SLASH}${text}`
      },
      {
        value: this.slicedYear,
        attr: SHORT_YEAR,
        getValue: text => `${text}${SLASH}${this.month}`
      }
    ]
  }
}
