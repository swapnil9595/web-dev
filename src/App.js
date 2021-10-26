import logo from './logo.svg';
import './App.css';
import './vendors/bootstrap/css/bootstrap.min.css';
import './vendors/bootstrap/bootstrap.min.css';
import './vendors/fontawesome/css/all.min.css';
import {BrowserRouter, Route} from "react-router-dom";
import HelloWorld from "./components/a6/HelloWorld";
import Practice from "./components/a6/Practice";
import Build from "./components/a6/Build";
import HomeScreen from "./components/a6/Build/HomeScreen/HomeScreen.js"
import ExploreScreen from "./components/a6/Build/ExploreScreen/ExploreScreen.js"


function App() {
  return (
      <BrowserRouter>
          <div className="container">
             <Route path="/a6/twitter/home" component={HomeScreen}/>
             <Route path="/a6/twitter/explore" component={ExploreScreen}/>
             <Route path="/a6/practice" component={Practice}/>
             <Route path="/a6/hello" component={HelloWorld}/>
          </div>
      </BrowserRouter>
  );
}


export default App;

