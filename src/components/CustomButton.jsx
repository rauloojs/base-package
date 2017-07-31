import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import Button from 'grommet/components/Button'


class CustomButton extends React.Component {
  static propTypes = {
    label: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired
  }
  render () {
    let { label, onClick } = this.props

    return (
      <Button label={label} onClick={onClick.bind(this)} />
    )
  }
}

export default CustomButton
