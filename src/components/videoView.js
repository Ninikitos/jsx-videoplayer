import React from 'react';

export class VideoView extends React.Component {
  render () {
    return (
      <video name='video-player'
        localPosition={[-0.2, 0, 0]}
        localScale={[0.480, 0.270, 0]}
        width={640}
        height={320}
        volume={0.8}
        viewMode={'full-area'}
        videoPath={'resources/IMG_6348.MOV'}
      ></video>
    );
  }
}
