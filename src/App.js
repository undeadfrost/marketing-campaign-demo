import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Home from './containers/Home';
import About from './containers/About';
import GirdLottery from './containers/GridLottery';

function App() {
	return (
		<Switch>
			<Route path={'/'} exact component={Home}/>
			<Route path={'/about'} component={About}/>
			<Route path={'/grid'} component={GirdLottery}/>
		</Switch>
	);
}

export default App;
