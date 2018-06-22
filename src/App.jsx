import React from 'react'

export class App extends React.Component {
  render() {
    return [
      <div key={'header'} className="container-new">
        <div className="container-new__item">3 new profile</div>
        <div className="container-new__button">check now</div>
        <div className="container-new__close"/>
      </div>,

      <div key={'main'} className="container-main">
        <div className="container-main__container-player">
        </div>
        <div className="container-info">
          <div className="container-info__photo"/>
          <div className="container-info__name">Sandra Star</div>
          <div className="container-info__description">
            <div className="description__item">
              <div className="description__item__title">Started</div>
              <div className="description__item__value">2017</div>
            </div>
            <div className="description__item">
              <div className="description__item__title">Age</div>
              <div className="description__item__value">27 years</div>
            </div>
            <div className="description__item">
              <div className="description__item__title">Age</div>
              <div className="description__item__value">
                <div className="activity">Softcore</div>,
                <div className="activity">Nude</div>,
                <div className="activity">Beautiful</div>,
                <div className="activity">Adorable</div>
              </div>
            </div>
            <div className="container-info__description-text">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
              industrys standard dummy text for ages.
            </div>
          </div>
        </div>
      </div>,

      <div key={'footer'} className="container-footer">
        <div className="container-footer__title">Sandra Star’s video</div>
        <div className="container-footer__container-videos">
          <div className="container-video">
            <div className="container-video__player"/>
            <div className="container-video__title">Title</div>
          </div>
        </div>
      </div>,
    ]
  }
}
