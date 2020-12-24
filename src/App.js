import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import PageNotFound from './components/NotFound';
import PhotoFeature from './features/Photo';

function App() {
  return (
    <div className="App">
        <BrowserRouter>
          <Header />
          <Switch>
            <Redirect exact to="/photos" from="/" />
            <Route exact path="/photos" component={PhotoFeature} />
            <Route component={PageNotFound} />
          </Switch>
        </BrowserRouter>
    </div>
  );
}

export default App;
 