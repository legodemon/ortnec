import React from 'react'
import PropTypes from 'prop-types'

import './Loader.scss'

export class Loader extends React.Component {
  static propTypes = {
    zoom: PropTypes.number
  }

  render() {
    return <div className="lds-heart" style={{zoom: this.props.zoom || 2}}>
      <div/>
    </div>
  }
}