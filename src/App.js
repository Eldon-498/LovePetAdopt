import HomePage from './pages/home';
import SearchPage from './pages/search';
import PetDetailsPage from './pages/detail';
import PetDetailsNotFound from './pages/petDetailsNotFound';
import Navigation from './components/navigation';
import {BrowserRouter as Router, Route} from 'react-router-dom';

function App() {
  return (
    <div>
      <Router>
        <Navigation />
        <Route path='/:type?'> <HomePage /> </Route>
      </Router>
    </div>
  );
}

export default App;
