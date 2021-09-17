import { Route, Switch } from 'react-router-dom';
import './App.css';
import Landing from './components/home/Landing';
import LoginForm from './components/login/LoginForm';
import SignupForm from './components/signup/SignupForm';

function App() {
  return (
    <div className="ui">
      <Switch>
        <Route path='/' exact component={Landing} />
        <Route path='/auth/login' exact component={LoginForm} />
        <Route path='/auth/signup' exact component={SignupForm} />
     </Switch>
    </div>
  );
}

export default App;
