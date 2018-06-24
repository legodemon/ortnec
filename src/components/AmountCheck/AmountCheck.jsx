import React from 'react'

import './AmountCheck.scss'

export class AmountCheck extends React.Component {
  render() {
    return [
      <div key={'amount'} className="amount">3 new profile</div>,
      <div key={'check'} className="check">check now</div>
    ]
  }
}