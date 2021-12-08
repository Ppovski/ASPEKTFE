import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useRoutes,
} from "react-router-dom";

import InfoTable from "./Components/infoTable";
import 'semantic-ui-css/semantic.min.css'
import EditCountry from "./Components/editCountry";

function App() {
  return (
    <div>
      <Router>
        <Routes>
        <Route path="/" exact element={<InfoTable />} />
        <Route path="/edit" element={<EditCountry />} />
        </Routes>
      </Router>
    </div>
  );
}
export default App;