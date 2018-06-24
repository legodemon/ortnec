import React from 'react'
import PropTypes from 'prop-types'

import './DownloadDropDown.scss'

export class DownloadDropDown extends React.Component {
  static propTypes = {
    links: PropTypes.array.isRequired
  }

  render() {
    const links = this.props.links

    return <nav className='download'>
      <ul>
        <li>
          <a href='#'>Download</a>
          <ul>
            {
              links.map(({fileSize, title, url}) => {
                return <li key={`${url}-download`}>
                  <a className='item' target={'_blank'} href={url}>
                    <div className='atr'>{title}</div>
                    <div className='size'>{fileSize}</div>
                  </a>
                </li>
              })
            }
          </ul>
        </li>
      </ul>
    </nav>
  }
}