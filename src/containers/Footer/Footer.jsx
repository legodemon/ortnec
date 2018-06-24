import React from 'react'

import './Footer.scss'
import {Preview} from '../../components/Preview/Preview'

export class Footer extends React.Component {
  render() {
    return <div key={'footer'} className="footer">

      <div className="footer__title">
        <div className="footer__title__value">
          Sandra Star’s video
        </div>
        <div className="footer__title__border"/>
      </div>

      <div className="footer__previews">
        <Preview/>
        <Preview/>
        <Preview/>
        <Preview/>
      </div>
    </div>
  }
}