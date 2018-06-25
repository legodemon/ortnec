import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

import './Preview.scss'

export class Preview extends React.Component {
  static propTypes = {
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    socialLink: PropTypes.object.isRequired,
    clickFn: PropTypes.func.isRequired,
    preview: PropTypes.string.isRequired,
  }

  render() {
    const {id, title, socialLink: {type, url}, clickFn, preview} = this.props

    return <div className='preview'>
      <div className='preview__image' onClick={() => clickFn(id)} style={{backgroundImage: `url(${preview})`}}/>
      <a className={classnames('social-icon', type)} href={url} target={'_blank'}/>
      <div className='preview__title'>{title}</div>
    </div>
  }
}
