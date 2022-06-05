import React from "react";

/*
  Components
*/
import Nav from "./components/common/Nav";
import Footer from "./components/common/Footer";
import Home from "./components/home/Home";
import StaffList from "./components/staff/StaffList";
import PetsList from "./components/pets/PetsList";
import NotFound from "./components/NotFound";
import NewPetForm from "./components/NewPetForm";

/*
  Data
  ---------------
  Note: Normally this data would be pulled from an API. It is not necessary, however, for this application.
*/
import { employees } from "./data/employees.js";
import { owners } from "./data/owners";
import { pets } from "./data/pets";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     employees,
  //     owners,
  //     pets,
  //   };
  // }

  // const { employees, owners, pets } = this.state;
  return (
    <div className="wrapper">
      <Router>
        <Nav />
        <Routes>
          <Route
            path="/"
            element={<Home employees={employees} owners={owners} pets={pets} />}
          />
          <Route path="/pets/*" element={<PetsList pets={pets} />} />
          <Route path="/staff" element={<StaffList employees={employees} />} />
          <Route path="/newpetform" element={<NewPetForm/>}/>
          <Route path="*" element={<NotFound/>}/>
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
