import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import GuessCount from './GuessCount'


function CoolComponent({ adjective = 'Cool', number = 15, admin }) {
    if (admin){ return <p>Youpi So {adjective} ! {number} TRUE </p> } 
    else {return <p>Youpi So {adjective} ! {number} FALSE </p>}  
}


ReactDOM.render(<div><CoolComponent adjective="awesome" number='qa' admin={true}/> <CoolComponent /> </div>, document.getElementById('compo_01'))
ReactDOM.render(<GuessCount guesses={15} />, document.getElementById('compo_02'));

ReactDOM.render(<App />, document.getElementById('compo_03'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
