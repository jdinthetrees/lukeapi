//no need to import React on app.js
import './App.css';
//npm install @reach/router
import { Router } from '@reach/router';
import People from "./components/People"
import Planets from "./components/Planets"
import Search from "./components/Search"
import Error from "./components/Error"

function App() {
  return (
    <div className="App">
      <Search />
      <Router>
     <People path="/people/:id"/>
     <Planets path="/planets/:id"/>
     <Error path="/error"/>
     </Router>
    </div>
  );
}

export default App;
