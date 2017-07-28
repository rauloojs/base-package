// Application bootstrap and rendering
import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types'


class App extends React.Component {
  // static propTypes = {
  // }

  shouldComponentUpdate () {
    return false
  }

  render () {
    return (
      <h1>
        APP!
      </h1>
    )
  }
}

export default App
