import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

import './VolumeIcon.scss'

export class VolumeIcon extends React.Component {
  static propTypes = {
    volume: PropTypes.number.isRequired,
    muteFn: PropTypes.func.isRequired
  }

  render () {
    const {volume, muteFn} = this.props

    return <div onClick={() => muteFn()} className='volume-icon'>
      <div className='volume-icon__base'/>
      <div className={classnames('volume-icon__low', {'hidden': +volume === 0 })} />
      <div className={classnames('volume-icon__high', {'hidden': +volume <= 50 })} />
      <div className={classnames('volume-icon__mute', {'hidden': +volume > 0 })} />
    </div>
  }
}