import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import Home from './components/home/Home';
import Course from './components/course/Course';
import About from './components/about/About';
import Contact from './components/contact/Contact';
import NotFound from './components/notFound/NotFound';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';

function App() {
  return (
    <div className="App">
      <Router>

        <Header></Header>

        <Switch>
            <Route exact path='/'>
              <Home></Home>
            </Route>
            <Route exact path='/course'>
              <Course></Course>
            </Route>
            <Route exact path='/about'>
              <About></About>
            </Route>
            <Route exact path='/contact'>
              <Contact></Contact>
            </Route>
            <Route path='*'>
              <NotFound></NotFound>
            </Route>
        </Switch>

        <Footer></Footer>
      </Router>
    </div>
  );
}

export default App;
