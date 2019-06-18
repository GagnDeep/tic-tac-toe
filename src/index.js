import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

document.getElementById('root').style.cssText = "height : 100%"

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
