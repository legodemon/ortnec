import React from 'react'

import './Favorites.scss'

export class Favorites extends React.Component {
  render () {
    return <div className="favorites">
      <div className="favorites__icon"/>
      <div className="favorites__text">Add to favorites</div>
    </div>
  }
}