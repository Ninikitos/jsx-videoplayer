import React from '../node_modules/react/index.js';
import mxs from '../node_modules/magic-script-components/index.js';
import { VideoView } from './components/videoView.js';

class App extends React.Component {
  onToggle(event) {
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

  render() {
    return React.createElement("view", {
      name: "main-view"
    }, React.createElement(VideoView, null), React.createElement("toggle", {
      type: 'default',
      localPosition: [0.25, -0.15, 0],
      onActivate: this.onToggle
    }, "Video start/stop"));
  }

}

export { App };
