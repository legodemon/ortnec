import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

import './Preview.scss'

export class Preview extends React.Component {
  static propTypes = {
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    socialLink: PropTypes.object.isRequired
  }

  render() {
    const {title, socialLink} = this.props

    return <div className='preview' onClick={() => console.log('asasas')}>
      <div className='preview__image'/>
      <div className={classnames('social-icon', socialLink.type)}/>
      <div className='preview__title'>{title}</div>
    </div>
  }
}