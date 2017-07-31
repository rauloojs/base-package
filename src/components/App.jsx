// Application bootstrap and rendering
import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types'
import { Provider } from 'react-redux'
import CustomButton from './CustomButton'


class App extends React.Component {
  static propTypes = {
    store: PropTypes.object.isRequired,
    // routes: PropTypes.object.isRequired,
  }

  shouldComponentUpdate () {
    return false
  }

  render () {
    return (
      <Provider store={this.props.store}>
        <div>

          <h1>APP!</h1>
          <CustomButton label={'hi'} onClick={() => console.log('hi')}/>
        </div>
      {/* <Router history={browserHistory} children={this.props.routes} /> */}
      </Provider>
    )
  }
}

export default App
