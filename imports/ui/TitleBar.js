import React from 'react'
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types'


export default class TitleBar extends React.Component {
  render(){

    return (
      <div>
        <h1>{this.props.title}</h1>
        <h5>{this.props.subtitle}</h5>
      </div>
    )
  }
}

TitleBar.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired
}
