import React from 'react'

import {Favorites} from '../../components/Favorites/Favorites'
import {DownloadDropDown} from '../../components/DownloadDropDown/DownloadDropDown'

import './Player.scss'

export class Player extends React.Component {
  render() {
    return <div className="player">
      <div className="player-component"/>
      <div className="player-controls">
        <div className="wrapper"/>
        <Favorites/>
        <DownloadDropDown/>
      </div>
    </div>
  }
}