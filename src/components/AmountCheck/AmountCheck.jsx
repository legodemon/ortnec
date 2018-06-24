import React from 'react'
import PropTypes from 'prop-types'

import './AmountCheck.scss'

export class AmountCheck extends React.Component {

  static propTypes = {
    amount: PropTypes.number.isRequired,
    link: PropTypes.string.isRequired
  }

  render() {
    const {amount, link} = this.props
    return [
      <div key={'amount'} className="amount">{`${amount} new profile`}</div>,
      <a key={'check'} className="check" href={link} target={'_blank'}>check now</a>
    ]
  }
}