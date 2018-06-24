import React from 'react'

import './Preview.scss'

export class Preview extends React.Component {
  render() {
    return <div className="preview">
      <div className="preview__image"/>
      <div className="social-icon tumblr"/>
      <div className="preview__title">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum sed egestas mi. Cras ornare neque sed eros
        malesuada, ac pretium risus lacinia.
      </div>
    </div>
  }
}