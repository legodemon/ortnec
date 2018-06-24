import React from 'react'
import PropTypes from 'prop-types'

import {Preview} from '../../components/Preview/Preview'
import './Footer.scss'

export class Footer extends React.Component {
  static propTypes = {
    videos: PropTypes.array.isRequired,
    name: PropTypes.string.isRequired,
    clickFn: PropTypes.func.isRequired
  }

  render() {
    const {videos, name, clickFn} = this.props

    return <div key={'footer'} className='footer'>

      <div className='footer__title'>
        <div className='footer__title__value'>
          {`${name}’s video`}
        </div>
        <div className='footer__title__border'/>
      </div>

      <div className='footer__previews'>
        {videos.map(({title, socialLink, id}) => <Preview
          key={`${id}-preview`} id={id} title={title} socialLink={socialLink} clickFn={clickFn}/>)}
      </div>
    </div>
  }
}