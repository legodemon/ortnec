import React from 'react'
import PropTypes from 'prop-types'
import {Player} from '../Player/Player'
import {ModelInfo} from '../../components/ModelInfo/ModelInfo'
import './Main.scss'

export class Main extends React.Component {
  static propTypes = {
    modelInfo: PropTypes.object.isRequired,
    video: PropTypes.object.isRequired
  }

  render() {
    const {modelInfo, video} = this.props

    return <div className='main'>
      <Player video={video}/>
      <ModelInfo data={modelInfo}/>
    </div>
  }
}