import React from 'react'

import {Favorites} from '../../components/Favorites/Favorites'
import {DownloadDropDown} from '../../components/DownloadDropDown/DownloadDropDown'

import './Player.scss'
import PropTypes from 'prop-types'

export class Player extends React.Component {
  static propTypes = {
    video: PropTypes.object.isRequired
  }

  render() {
    const {download} = this.props.video

    return <div className='player'>
      <div className='player-component'/>
      <div className='player-controls'>
        <div className='wrapper'/>
        <Favorites/>
        <DownloadDropDown links={download}/>
      </div>
    </div>
  }
}