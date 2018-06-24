import React from 'react'
import PropTypes from 'prop-types'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'

import {Header} from './containers/Header/Header'
import {Main} from './containers/Main/Main'
import {Footer} from './containers/Footer/Footer'
import {Loader} from './components/Loader/Loader'

import * as actions from './actions'

class App extends React.Component {
  static propTypes = {
    actions: PropTypes.shape({
      getData: PropTypes.func.isRequired,
      closeHeader: PropTypes.func.isRequired,
      playVideo: PropTypes.func.isRequired,
    }),
    store: PropTypes.object
  }

  componentDidMount() {
    this.props.actions.getData()
  }

  render() {
    const {modelInfo, newProfiles, videos, loading} = this.props.store
    const {closeHeader, playVideo} = this.props.actions

    return !loading
      ? [
        <Header key={'header'} data={newProfiles} closeFn={closeHeader}/>,
        <Main key={'main'} video={videos.slice(0,1).pop()} modelInfo={modelInfo}/>,
        <Footer key={'footer'} videos={videos.slice(1)} name={modelInfo.name} clickFn={playVideo}/>,
      ] : <Loader zoom={10} />
  }
}

export default connect(state => ({store: state}), dispatch => ({actions: bindActionCreators(actions, dispatch)}))(App)