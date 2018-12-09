import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import { Link } from 'react-router-dom';



ReactDOM.render(<App />, document.getElementById('root'));

serviceWorker.unregister();
