import { Route, Switch } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Landing from './components/home/Landing';
import LoginForm from './components/login/LoginForm';
import SignupForm from './components/signup/SignupForm';
import ProjectLayout from './components/projects/ProjectLayout';
import CreateProjectContainer from './components/projects/create/CreateProjectContainer.jsx';
import EditProjectContainer from './components/projects/edit/EditProjectContainer.jsx';
import ProjectList from './components/projects/view/ProjectList';
import NoProjectMessage from './components/projects/NoProjectMessage';
import ProjectDashboard from './components/projects/dashboard/ProjectDashboard';


function App() {
  return (
    <div className="ui" id='appContainer'>
      <Switch>
        <Route path='/' exact component={Landing} />
        <Route path='/auth/login' exact component={LoginForm} />
        <Route path='/auth/signup' exact component={SignupForm} />
        <ProjectLayout path='/projects/create' exact component={CreateProjectContainer} page='create' />
        <ProjectLayout path='/projects/:id/edit' exact component={EditProjectContainer} page='edit' />
        <ProjectLayout path='/projects/' exact component={ProjectList} page='allProjects' />
        <ProjectLayout path='/landing' exact component={NoProjectMessage} page='landing' />
        <ProjectLayout path='/dashboard' exact component={ProjectDashboard} page='dashboard' />
        <Route path='*' exact component={() => <h1>NOT FOUND</h1>} />
     </Switch>
    </div>
  );
}

export default App;
