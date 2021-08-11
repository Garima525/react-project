
import './App.css';
import { Button } from 'react-bootstrap';
import Header from './Header';
import {BrowserRouter, Route,Switch} from 'react-router-dom';
import Login from './Login';
import Register from './Register';
import AddCourse from './AddCourse';
import UpdateCourse from './UpdateCourse';
import Protected from './Protected';
import CourseList from './CourseList';
import Search from './Search';

function App() {


  return (
    <div className="App">
      <BrowserRouter>
      <Switch>
      {/* <Header />      */}
      <Route path="/register">
        <Register />
        
      </Route>

      <Route path="/login">
      {/* <Protected Component={Login}/> */}
        <Login />
      </Route>

      <Route path="/add">
        <Protected Component={AddCourse}/>
        {/* <AddCourse /> */}
      </Route>

      <Route path="/update/:id">
        <Protected Component={UpdateCourse}/>
        {/* <UpdateCourse /> */}
      </Route>

      <Route path="/search">
        <Protected Component={Search}/>
        {/* <UpdateCourse /> */}
      </Route>

      <Route path="/">
        <Protected Component={CourseList}/>
        {/* <AddCourse /> */}
      </Route>
      
      </Switch>
      </BrowserRouter>
      </div>
  );
}

export default App;
