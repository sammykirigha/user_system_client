import { Route, Switch } from 'react-router-dom';
import './App.css';
import Landing from './components/home/Landing';
import LoginForm from './components/login/LoginForm';
import ProjectForm from './components/projects/ProjectForm';
import ProjectsModal from './components/projects/ProjectsModal';
import SearchComponent from './components/projects/SearchComponent';
import ConfirmDelete from './components/projects/view/ConfirmDelete';
import SingleProjectCard from './components/projects/view/SingleProjectCard';
import SignupForm from './components/signup/SignupForm';

function App() {
  return (
    <div className="ui">
      <Switch>
        <Route path='/' exact component={SearchComponent} />
        <Route path='/auth/login' exact component={LoginForm} />
        <Route path='/auth/signup' exact component={SignupForm} />
     </Switch>
    </div>
  );
}

export default App;
