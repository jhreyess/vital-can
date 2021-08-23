import { BrowserRouter, Switch, Route } from 'react-router-dom';

//Components
import Login from './System/components/Auth/Login';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/login" component={Login} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
