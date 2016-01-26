import React from 'react'
import ReactDOM from 'react-dom'
import injectTapEventPlugin from 'react-tap-event-plugin';
import { browserHistory, Router, Route, Link } from 'react-router'  
import {Main} from './components/Main';
import Home from './components/Home';
import Contact from './components/Contact';

injectTapEventPlugin();

ReactDOM.render(  
	<Router history={browserHistory}>
	    <Route path="/" component={Main}>
	      <Route path="Home" components={{ content: Home }} />
	      <Route path="Contact" components={{ content: Contact }} />
	    </Route>
  	</Router>,document.getElementById('app'))



