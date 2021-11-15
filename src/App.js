import logo from "./logo.svg";
import "./App.css";
import "./vendors/bootstrap/css/bootstrap.min.css";
import "./vendors/bootstrap/bootstrap.min.css";
import "./vendors/fontawesome/css/all.min.css";
import { BrowserRouter, Link, Route } from "react-router-dom";
import HelloWorld from "./a6/components//HelloWorld";
import Practice from "./a6/components/Practice";
import Build from "./a6/components/Build";
import HomeScreen from "./a6/components/Build/HomeScreen/HomeScreen.js";
import ExploreScreen from "./a6/components/Build/ExploreScreen/ExploreScreen.js";

import Practice7 from "./a7/components/Practice/index";
import Build7 from "./a7/components/Build/index";
import Practice8 from "./a8/components/Practice";
import Build8 from "./a8/components/Build/index";

function App() {
  return (
    <BrowserRouter>
      <div className="container">
        {/* Assignment 6 */}
        <Route path="/a6/hello" exact={true}>
          <HelloWorld />
        </Route>
        <Route path={["/a6", "/a6/practice"]} exact={true}>
          <Practice />
        </Route>
        <Route path="/a6/build" exact={true}>
          <Build />
        </Route>
        <Route path="/a6/twitter/home" component={HomeScreen} />
        <Route path="/a6/twitter/explore" component={ExploreScreen} />

        {/* Assignment 7 */}
        <Route path={["/a7", "/a7/practice"]} exact={true}>
          <Practice7 />
        </Route>
        <Route path="/a7/twitter">
          <Build7 />
        </Route>

        {/* Assignment 8 */}
        <Route path={["/a8", "/a8/practice"]} exact={true}>
          <Practice8 />
        </Route>
        <Route path="/a8/twitter">
          <Build8 />
        </Route>
      </div>
      <hr />
      <h1>React.js Assignments</h1>
      <ul>
        <li>
          {" "}
          <Link to="/a6">Assignment 6</Link>{" "}
        </li>
        <li>
          {" "}
          <Link to="/a7">Assignment 7</Link>{" "}
        </li>
        <li>
          {" "}
          <Link to="/a8">Assignment 8</Link>{" "}
        </li>
      </ul>
    </BrowserRouter>
  );
}

export default App;
