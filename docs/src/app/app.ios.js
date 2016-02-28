import React, {
  AppRegistry,
} from 'react-native';
import {
  Presets,
  LookRoot,
} from 'react-look-native';

import App from './app.native';

const config = Presets['react-native'];

const Container = () => (
  <LookRoot config={config}>
    <App />
  </LookRoot>
);

AppRegistry.registerComponent('MaterialUIDocs', () => Container);
