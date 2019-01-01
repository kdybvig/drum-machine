import React, { Component } from 'react';
import ee from '../eventEmitter';

class Display extends Component {
  state = {text: ''}

  componentWillMount() {
    ee.on('foo', e => this.setState({text: e}))
  }

  render() {
      return (
      <div id="display">
        {this.state.text}
      </div>
      );
  }
}

export default Display;