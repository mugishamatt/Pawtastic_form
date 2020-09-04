import UserForm from "./Form"
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

export default function NavBar() {
  return (
    <React.Fragment>
      <Router>
        <div className="Sidenavbar">
          <nav>
            <ul >
              <li className="navBarLink1">
                <Link className='navBarLink' to="/">PAWTASIC</Link>
              </li>
              <li>
                <Link className='navBarLink' to="/human profile">human profile</Link>
              </li>
              <li>
                <Link className='navBarLink' to="/Pet basics">Pet basics</Link>
              </li>
              <li>
                <Link className='navBarLink' to="/Pet details">Pet details</Link>
              </li>
              <li>
                <Link className='navBarLink' to="/confirm">confirm</Link>
              </li>

            </ul>
          </nav>

          {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
          <Switch>
            <Route path="/PAWTASIC"></Route>
            <Route path="/human profile"></Route>
            <Route exact path="/Pet basics" component={UserForm}></Route>
            <Route path="/pet details"></Route>
            <Route path="/confirm"></Route>
            <img src="https://www.washingtonpost.com/wp-apps/imrs.php?src=https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/HB4AT3D3IMI6TMPTWIZ74WAR54.jpg&w=1440" width="300px" />
          </Switch>

        </div>

      </Router>
    </React.Fragment>



  );
}

