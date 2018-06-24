import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

import {AmountCheck} from '../../components/AmountCheck/AmountCheck'
import './Header.scss'

export class Header extends React.Component {
  static propTypes = {
    data: PropTypes.shape({
      amount: PropTypes.number.isRequired,
      checkNowUrl: PropTypes.string.isRequired,
      visible: PropTypes.bool.isRequired
    }),
    closeFn: PropTypes.func.isRequired
  }

  render() {
    const {closeFn, data: {amount, checkNowUrl, visible}} = this.props

    return <div className={classnames('header', {'hidden': !visible})}>
      <div className="wrapper">
        <AmountCheck amount={amount} link={checkNowUrl}/>
      </div>
      <div className="close" onClick={() => closeFn()}/>
    </div>
  }
}
