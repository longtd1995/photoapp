import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import PageNotFound from './components/NotFound';
import PhotoFeature from './features/Photo';
import AddEditPage from './features/Photo/pages/AddEdit';

function App() {
  return (
        <BrowserRouter>
          <Header />
          <Switch>
            <Redirect exact from='/' to="/photos" />
            <Route path="/photos" component={PhotoFeature} />
            <Route component={PageNotFound} />
          </Switch>
        </BrowserRouter>
  );
}

export default App;
 