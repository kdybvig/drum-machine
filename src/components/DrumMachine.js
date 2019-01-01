import React from 'react';
import Display from '../containers/Display';
import PadSection from './PadSection';

const DrumMachine = () => (
  <div id="drum-machine">
    <PadSection />
    <Display />
    <h2>Drum Machine</h2>
  </div>
)

export default DrumMachine;