import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Navbar from './components/navbar';
import Characters from './components/Characters/Characters';
import Episodes from './components/Episodes/Episodes';
import Location from './components/Location/Location';
import MyWatch from './components/MyWatchList/MyWatch';
import Welcome from './components/welcome';



function App() {
  return (
    <BrowserRouter>
      <Navbar/>
      <div className="App">
        <Switch>
          <Route exact path='/Rick-and-Morty' component={Welcome}/>
          <Route path='/characters' component={Characters}/>
          <Route path='/episodes' component={Episodes}/>
          <Route path='/locations' component={Location}/>
          <Route path='/my-watch-list' component={MyWatch}/>
        </Switch>
        
        <footer>
          <div className="footer-wrapper">
            <h3> DEVELOPER: OLEH KALYNOVSKYI </h3>
            <a href="mailto:oleh.kalynovskyi@gmail.com">Contact me: oleh.kalynovskyi@gmail.com</a>
            <a href="https://github.com/oleh-kalynovskyi">My portfolio on Github</a>
          </div>
        </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
