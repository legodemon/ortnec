import React from 'react'

import './DownloadDropDown.scss'

export class DownloadDropDown extends React.Component {
  render() {
    return <nav className="download">
      <ul>
        <li>
          <a href="#">Download</a>
          <ul>
            <li>
              <a className="item" href="#">
                <div className="atr">LQ</div>
                <div className="size">750 Mb</div>
              </a>
            </li>
            <li>
              <a className="item" href="#">
                <div className="atr">MQ</div>
                <div className="size">2309 Mb</div>
              </a>
            </li>
            <li>
              <a className="item" href="#">
                <div className="atr">HQ</div>
                <div className="size">4598 Mb</div>
              </a>
            </li>
          </ul>
        </li>
      </ul>
    </nav>
  }
}