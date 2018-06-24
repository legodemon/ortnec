import React from 'react'

import './ModelInfo.scss'

export class ModelInfo extends React.Component {
  render() {
    return <div className="info">
      <div className="photo"/>
      <div className="name">Sandra Star</div>
      <div className="description">

        <div className="description__item">
          <div className="description__item__title">Started</div>
          <div className="description__item__value">
            <div className="link">2017</div>
          </div>
        </div>

        <div className="description__item">
          <div className="description__item__title">Age</div>
          <div className="description__item__value">27 years</div>
        </div>

        <div className="description__item">
          <div className="description__item__title">Activities</div>
          <div className="description__item__value link">Softcore</div>
          <div className="description__item__value link">Nude</div>
          <div className="description__item__value link">Beautiful</div>
          <div className="description__item__value link">Adorable</div>
        </div>

        <div className="delimiter"/>

        <div className="text">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
          industrys standard dummy text for ages.
        </div>
      </div>
    </div>
  }
}