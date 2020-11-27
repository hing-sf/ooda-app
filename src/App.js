import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import ClientSearchContainer from '././components/clientSearch/ClientSearchContainer';
import UserDetails from '././components/clientSearch/UserDetails';

function App() {
	return (
		<Router>
			<div className='App'>
				<Switch>
					<Route path='/' exact component={ClientSearchContainer} />
					<Route path='/user-details/:id' exact component={UserDetails} />
				</Switch>
			</div>
		</Router>
	);
}

export default App;
