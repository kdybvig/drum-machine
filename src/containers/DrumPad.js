import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ee from '../eventEmitter';

class DrumPad extends Component {

    state = {isActive: false}

    audioRef = React.createRef()


    play = () => {
        const audio = this.audioRef.current;
        audio.currentTime = 0;
        audio.play();
        ee.emit('foo', this.props.name)
    }

    componentDidMount() {
        window.addEventListener('keydown', e => {
            if(e.key.toUpperCase() === this.props.keyName) {
                this.setState({isActive: true})
            }
        })
        window.addEventListener('keyup', e => {
            if(e.key.toUpperCase() === this.props.keyName) {
                this.setState({isActive: false})
                this.play()
            }
        })
    }

    render() {
        const className = this.state.isActive ? 'drum-pad active' : 'drum-pad'

        return (
        <div onClick={this.play} id={this.props.id} className={className}>
          {this.props.keyName}
          <audio ref={this.audioRef} className='clip' id={this.props.keyName} src={`./assets/sounds/${this.props.sound}`} />
        </div>
        );
    }
}

DrumPad.propTypes = {
    id: PropTypes.string.isRequired,
    keyName: PropTypes.string.isRequired,
    sound: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired
}

export default DrumPad;