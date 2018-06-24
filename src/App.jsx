import React from 'react'
import PropTypes from 'prop-types'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'

import {Header} from './containers/Header/Header'
import {Main} from './containers/Main/Main'
import {Footer} from './containers/Footer/Footer'

import * as actions from './actions'

class App extends React.Component {
  componentDidMount() {
    this.props.actions.getData()
  }

  render() {
    return [
      <Header key={'header'}/>,
      <Main key={'main'}/>,
      <Footer key={'footer'}/>,
    ]
  }
}

App.propTypes = {
  actions: PropTypes.shape({
    getData: PropTypes.func.isRequired
  }),
}

export default connect(state => ({store: state}), dispatch => ({actions: bindActionCreators(actions, dispatch)}))(App)