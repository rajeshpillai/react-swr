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

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
     <Router>
      <h4>useSWR Demo</h4>
      <NavBar />
      <Switch>
        <Route path="/app-with-mutation-binding" exact>
          <AppWithMutationBinding />
        </Route>
        <Route path="/pagination" exact>
          <PaginationDemo />
        </Route>
      </Switch>
      </Router>
  </StrictMode>,
  rootElement
);
