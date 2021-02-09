import ItemTable from "./ItemTable";
import React, { useState, useEffect } from "react";

function App() {
  //add useState for all state variables
  const App = () => {
    const [name, gender, age] = useState({[
      {title}
    ]
   
  const 
  //load locationStorage
  useEffect(() => {
    const items = localStorage.getItem("items");
    // ...
  }, []);

  /*
 
  return (
    <div>
      <h1>Hello React with Local Storage!</h1>
 
      <input value={value} type="text" onChange={onChange} />
 
      <p>{value}</p>
    </div>
  );
};
 
export default App;
  */

  return (
    <div className="card" style={{ width: 400 }}>
      <div className="card-content">
        <p className="is-4 title has-text-centered">Add Person</p>
        <div className="field">
          <label className="label">Name</label>
          <input
            className="input"
            type="text"
            placeholder="e.q John Smith"
            //update related state based on event
          ></input>
        </div>

        <div className="field">
          <label className="label">Gender</label>
          <select className="input" type="text" placeholder="Please select ..">
            <option value="" disabled selected hidden>
              -- Select Gender --
            </option>
            <option>Male</option>
            <option>Female</option>
          </select>
        </div>

        <div className="field">
          <label className="label">Age</label>
          <input className="input" type="number" placeholder="e.q 30"></input>
        </div>

        <button className="button is-primary is-fullwidth">Submit</button>

        <div className="mb-4"></div>

        {/* display tables for all persons */}
        <p className="is-4 title has-text-centered">Person List</p>
        {/* sample table */}
        <ItemTable name={"Alice"} gender={"Female"} age={""} />
        <ItemTable name={"Bob"} gender={"Male"} age={"50"} />
        <p>WARADORN SIRIPUNT 620612163</p>
      </div>
    </div>
  );
}

export default App;
