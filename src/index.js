// Application bootstrap and rendering
import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App'

// Load SCSS
import './scss/app.scss';

// Render Setup
// ------------------------------------
const MOUNT_NODE = document.getElementById('root')

let render = () => {
  ReactDOM.render(
    <App />,
    MOUNT_NODE
  )
}

// Let's Go!
// ------------------------------------
render()
