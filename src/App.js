import './App.css';
import { useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import { UserContext } from './Utils/User';
import RequireLogin from './Components-elements/RequireLogin';
import Home from './Components-Pages/Home';

function App() {
  const [user, setUser] = useState({ username: null, avatar_url: '' });

  return (
    <UserContext.Provider value={{ user, setUser }}>
      <RequireLogin>
        <div className="App">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
          </Switch>
        </div>
      </RequireLogin>
    </UserContext.Provider>
  );
}

export default App;
