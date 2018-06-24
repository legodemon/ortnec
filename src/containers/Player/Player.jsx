import React from 'react'
import ReactPlayer from 'react-player'
import classnames from 'classnames'
import PropTypes from 'prop-types'

import Slider from 'react-rangeslider'

import 'react-rangeslider/lib/index.css'

import {VolumeIcon} from '../../components/VolumeIcon/VolumeIcon'
import {Favorites} from '../../components/Favorites/Favorites'
import {DownloadDropDown} from '../../components/DownloadDropDown/DownloadDropDown'

import './Player.scss'

const formatSecondsAsTime = (secs, format) => {
  let hr  = Math.floor(secs / 3600)
  let min = Math.floor((secs - (hr * 3600))/60)
  let sec = Math.floor(secs - (hr * 3600) -  (min * 60))

  if (hr < 10)   { hr    = '0' + hr }
  if (min < 10) { min = '0' + min }
  if (sec < 10)  { sec  = '0' + sec }
  if (hr)            { hr   = '00' }

  if (format != null) {
    let formattedTime = format.replace('hh', hr)
    formattedTime = formattedTime.replace('h', hr * 1 + '') // check for single hour formatting
    formattedTime = formattedTime.replace('mm', min)
    formattedTime = formattedTime.replace('m', min * 1 +'') // check for single minute formatting
    formattedTime = formattedTime.replace('ss', sec)
    formattedTime = formattedTime.replace('s', sec * 1 +'') // check for single second formatting
    return formattedTime
  } else {
    return hr + ':' + min + ':' + sec
  }
}

const VOLUME_DEFAULT = 80;

export class Player extends React.Component {
  state = {
    playing: false,
    duration: null,
    playedSeconds: null,
    volume: VOLUME_DEFAULT
  }

  static propTypes = {
    video: PropTypes.object.isRequired
  }

  playPause = () => this.setState({ playing: !this.state.playing })

  mute = () => this.setState({volume: this.state.volume > 0 ? 0 : VOLUME_DEFAULT })

  onDuration = duration => this.setState({ duration: duration })

  onProgress = ({playedSeconds}) => this.setState({ playedSeconds: playedSeconds })

  handleChange = value => this.setState({volume: value})

  render() {
    const {download, sources: [{mp4}]} = this.props.video
    const {playing, duration, playedSeconds, volume} = this.state

    return <div className='player'>
      <ReactPlayer
        className='player-component'
        url={mp4}
        ref={this.ref}
        playing={playing}
        onDuration={this.onDuration}
        onProgress={this.onProgress}
        volume={volume/100}
      />
      <div className='player-controls'>
        <div className='wrapper'>
          <div
            className={classnames('button', {'pause': playing, 'play': !playing})}
            onClick={() => this.playPause()}
          />
          <VolumeIcon muteFn={this.mute} volume={volume}/>
          <Slider
            min={0} max={100}
            tooltip={false}
            value={volume}
            onChange={this.handleChange}
          />
          <div className='current'>{formatSecondsAsTime(Math.ceil(playedSeconds))}</div>
          <div className='total'>{formatSecondsAsTime(Math.ceil(duration))}</div>
        </div>
        <Favorites/>
        <DownloadDropDown links={download}/>
      </div>
    </div>
  }
}