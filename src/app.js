import React from 'react';

export class App extends React.Component {
  render () {
    return (
      <view name="main-view">
        <text textSize={0.10} textColor={[0.1, 1, 0.1, 0.84]} localPosition={[0, 0.25, 0]}>{this.state.counter}</text>
      </view>
    );
  }
}
