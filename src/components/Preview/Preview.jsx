import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

import './Preview.scss'

export class Preview extends React.Component {
  static propTypes = {
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    socialLink: PropTypes.object.isRequired,
    clickFn: PropTypes.func.isRequired
  }

  render() {
    const {id, title, socialLink, clickFn} = this.props

    return <div className='preview' onClick={() => clickFn(id)}>
      <div className='preview__image'/>
      <div className={classnames('social-icon', socialLink.type)}/>
      <div className='preview__title'>{title}</div>
    </div>
  }
}