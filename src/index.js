import { StrictMode } from "react";
import ReactDOM from "react-dom";
import {
  BrowserRouter as Router, 
  Switch,
  Route,
  useParams
} from 'react-router-dom';

import AppWithMutationBinding from "./app-with-mutation-binding.js";
import NavBar from './components/navbar';
import PaginationDemo from "./pagination-demo";
import SWRBasics from './swr-basics';
import "./styles.css";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
     <Router>
      <h4>useSWR Demo</h4>
      <div className="container">
        <div className="sidebar">
          <NavBar />
        </div>
        <div className="main">
        <Switch>
          <Route path="/basics" exact>
            <SWRBasics id = {1} />
          </Route>
          <Route path="/app-with-mutation-binding" exact>
            <AppWithMutationBinding />
          </Route>
          <Route path="/pagination" exact>
            <PaginationDemo />
          </Route>
        </Switch>
        </div>
      </div>
      </Router>
  </StrictMode>,
  rootElement
);
