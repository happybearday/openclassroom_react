import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';


function CoolComponent({ adjective = 'Cool' }) {
    return <p>Youpi So {adjective} !</p>
  }
  
ReactDOM.render(<div><CoolComponent adjective="awesome" /> <CoolComponent /> </div>, document.getElementById('compo_01'))

ReactDOM.render(<App />, document.getElementById('compo_02'));


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
