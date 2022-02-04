import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
// import reportWebVitals from './reportWebVitals';
import Learn from './Learn';
import Contact from './Contact';

const Routing = () => {
  return(
    <Router>
      <Switch>
        <Route exact path="/" component={App} />
        <Route path="/Learn" component={Learn} />
        <Route path="/Contact" component={Contact} />
        <Route path='/play' component={() => { 
     window.location.href = 'https://github.com/AbhinavJaintle/Float-Chess'; 
     return null;
}}/>
      </Switch>
    </Router>
  )
}

ReactDOM.render(
  <React.StrictMode>
    <Routing />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
