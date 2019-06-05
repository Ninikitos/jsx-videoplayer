import React from 'react';
import { VideoView } from './components/videoView.js';
import mxs from 'magic-script-components';

export class App extends React.Component {

  onToggle (event) {
    const container = mxs.getContainer('video-player');
    if (container !== undefined) {
      const video = container.parent.findChild('video-player');
      if (video.isPlaying()) {
        video.stop();
      } else {
        video.start();
      }
    } else {
      console.log('Could not find video element container');
    }
  }

  render () {
    return (
      <view name='main-view'>
        <VideoView/>
        <toggle type={'default'} localPosition={[0.25, -0.15, 0]} onActivate={this.onToggle}>Video start/stop</toggle>
      </view>
    );
  }
}
