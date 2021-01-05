import React from "react";
import Navbar from "react-bootstrap/Navbar";
import "./App.css";

function App() {
  return (
    <div className="App container py-3">
      <Navbar collapseOnSelect bg="dark" expand="md" className="mb-3">
        <Navbar.Brand className="font-weight-bold text-muted">
          Note
        </Navbar.Brand>
        <Navbar.Toggle />
      </Navbar>
    </div>
  );
}

export default App;
