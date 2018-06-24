import React from 'react'

import {Header} from './containers/Header/Header'
import {Main} from './containers/Main/Main'
import {Footer} from './containers/Footer/Footer'

export class App extends React.Component {
  render() {
    return [
      <Header key={'header'}/>,
      <Main key={'main'}/>,
      <Footer key={'footer'}/>,
    ]
  }
}
