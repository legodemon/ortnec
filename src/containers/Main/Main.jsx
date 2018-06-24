import React from 'react'

import {Player} from '../Player/Player'
import {ModelInfo} from '../../components/ModelInfo/ModelInfo'
import './Main.scss'

export class Main extends React.Component {
  render() {
    return <div className="main">
      <Player/>
      <ModelInfo/>
    </div>
  }
}