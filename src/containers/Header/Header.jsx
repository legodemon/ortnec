import React from 'react'

import {AmountCheck} from '../../components/AmountCheck/AmountCheck'
import './Header.scss'

export class Header extends React.Component {
  render() {
    return <div className="header">
      <div className="wrapper">
        <AmountCheck />
      </div>
      <div className="close"/>
    </div>
  }
}