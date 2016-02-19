import React from 'react'
import ReactDOM from 'react-dom'
import injectTapEventPlugin from 'react-tap-event-plugin';
import { browserHistory, Router, IndexRoute,Route, Link } from 'react-router'  
import {Main} from './components/Main';
import Home from './components/Home';
import About from './components/About';

injectTapEventPlugin();

ReactDOM.render(  
	<Router history={browserHistory}>
	    <Route path="/" component={Main}>
	      <Route path="Home" components={{ content: Home }} />
	      <Route path="About" components={{ content: About }} />
	      <IndexRoute component={Home}/>
	    </Route>
  	</Router>,document.getElementById('app'))



