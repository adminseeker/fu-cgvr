

import {ReactInstance, Surface} from 'react-360-web';
import WebVRPolyfill from 'webvr-polyfill';
const polyfill = new WebVRPolyfill();

function init(bundle, parent, options = {}) {
  const r360 = new ReactInstance(bundle, parent, {
    // Add custom options here
    fullScreen: true,
    ...options,
  });

  const buttonsPanel = new Surface(
    400,
    400,
    Surface.SurfaceShape.Flat
  );

  buttonsPanel.setAngle(
    -0.6,
    0.1
  )

  r360.renderToSurface(
    r360.createRoot('ConnectedButtonInfoPanel', { /* initial props */ }),
    buttonsPanel
  );

  const infoPanel = new Surface(
    400,
    400,
    Surface.SurfaceShape.Flat
  );

  infoPanel.setAngle(
    0.6,
    0.1
  )

  r360.renderToSurface(
    r360.createRoot('ConnectedHouseInfoPanel', { /* initial props */ }),
    infoPanel
  );

  // Load the initial environment
  r360.compositor.setBackground(r360.getAssetURL('360_vittala_temple.jpg'));
}

window.React360 = {init};
