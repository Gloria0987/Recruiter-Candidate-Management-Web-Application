import './App.css';
import {Home} from './components/Home'
import {Candidates} from './components/Candidates';
import {Navigation} from './components/Navigation'

import {BrowserRouter, Route, Switch} from 'react-router-dom';
function App() {
  return (
    <BrowserRouter>
    <div className="container">

      <h3 className="m-3 d-flex justify-content-center">Candidate Details</h3>
      <h5 className="m-3 d-flex justify-content-center">Recruter Candidate Management Portal</h5>

    <Navigation/>
     <Switch>
       <Route path='/' component={Home} exact/>
       <Route path='/' component={Candidates}/>
     </Switch>
    </div>
    </BrowserRouter>
  );
}

export default App;
