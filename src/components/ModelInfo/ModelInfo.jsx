import React from 'react'
import PropTypes from 'prop-types'

import './ModelInfo.scss'

export class ModelInfo extends React.Component {
  static propTypes = {
    data: PropTypes.object.isRequired
  }

  render() {
    const {activities, age, description, name, yearStarted} = this.props.data

    return <div className='info'>
      <div className='photo'/>
      <div className='name'>{name}</div>
      <div className='description'>

        <div className='description__item'>
          <div className='description__item__title'>Started</div>
          <div className='description__item__value'>
            <div className='link'>{yearStarted}</div>
          </div>
        </div>

        <div className='description__item'>
          <div className='description__item__title'>Age</div>
          <div className='description__item__value'>{`${age} years`}</div>
        </div>

        <div className='description__item'>
          <div className='description__item__title'>Activities</div>
          {
            activities.map(({id, title, url}) => <a key={`${id}-activities`} href={url}
              className='description__item__value link'>{title}</a>)
          }
        </div>

        <div className='delimiter'/>

        <div className='text'>{description}</div>
      </div>
    </div>
  }
}