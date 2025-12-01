import React, { useState } from "react";
/* import Table from "react-bootstrap/Table"; */
import { MdDelete } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import "./Home.css";

function Home() {
  const data = [
    {
      userid: 1,
      name: "John Doe",
      email: "John@gmail.com",
      department: "Developer",
      salary: 30000,
      attendance: 50,
    },
    {
      userid: 2,
      name: "Jane",
      email: "Jane@gmail.com",
      department: "QA",
      salary: 25000,
      attendance: 60,
    },
    {
      userid: 3,
      name: "Michael",
      email: "Michael@gmail.com",
      department: "Manager",
      salary: 60000,
      attendance: 70,
    },
    {
      userid: 4,
      name: "Priya",
      email: "Priya@gmail.com",
      department: "Developer",
      salary: 45000,
      attendance: 59,
    },
  ];

  const [addDetails, setaddDetails] = useState(false);
  const [editDetails, seteditDetails] = useState(false);
  const [query, setQuery] = useState("");
  const addEmp = () => {
    setaddDetails(true);
  };
  const editEmpDetails = () => {
    seteditDetails(true);
  };
  const closeAddDetails = () => {
    setaddDetails(false);
  };
  const closeEditDetails = () => {
    setQuery("");
    seteditDetails(false);
  };
  const viewEmpDetails = () => {
    seteditDetails(true);
  };

  const submitAlert = () => {
    alert("You have submitted successfully!!");
  };
  const deleteEmp = () => {
    alert("You have Delete successfully!!");
  };
  const editEmp = () => {
    alert("You have made the changes successfully!!");
  };
  //filter data based on search query

  const filteredData = data.filter((newData) =>
    newData.email.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div>
      {addDetails && (
        <div className="Add-emp">
          <div>
            {" "}
            <button onClick={closeAddDetails}>close</button>
          </div>
          <h6>Enter the details here:</h6>

          <input type="text" placeholder="Employee Name" />
          <input type="email" name="" id="" placeholder="Email" />
          <input type="text" name="" id="" placeholder="Department" />
          <input type="number" name="" id="" placeholder="Salary" />
          <input type="text" name="" id="" placeholder="Attendance" />
          <button type="submit" onClick={submitAlert}>
            Submit
          </button>
        </div>
      )}
      {editDetails && (
        <div className="edit-emp">
          <button onClick={closeEditDetails}>close</button>
          <h6>enter the employee email here to search</h6>
          <input
            className="inputSearch"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            type="text"
            placeholder="search here..."
            name=""
            id=""
          />
          {/* <button type="submit" onClick={submitAlert}>
            Submit
          </button> */}

          {/* results */}
          {query && (
            <table className="custom-table">
              <thead>
                <tr>
                  <th>Employee Name</th>
                  <th>Email</th>
                  <th>Department</th>
                  <th>Salary</th>
                  <th>Attendance</th>
                </tr>
              </thead>
              <tbody>
                {filteredData.length > 0 ? (
                  filteredData.map((newData) => (
                    <tr>
                      <td>{newData.name}</td>
                      <td>{newData.email}</td>
                      <td>{newData.department}</td>
                      <td>{newData.salary}</td>
                      <td>{newData.attendance}</td>
                    </tr>
                  ))
                ) : (
                  <p>no matches found...</p>
                )}
              </tbody>
            </table>
          )}
        </div>
      )}

      <div className="page-layout">
        <div className="button-panel">
          <button className="add-btn" onClick={addEmp}>
            Add
          </button>
          <button className="edit-btn" onClick={editEmpDetails}>
            Edit
          </button>
          <button className="delete-btn">Delete</button>
          <button className="view-btn" onClick={viewEmpDetails}>
            View
          </button>
        </div>

        <div className="table-container">
          <table className="custom-table">
            <thead>
              <tr>
                <th>#</th>
                <th>Employee Name</th>
                <th>Email</th>
                <th>Department</th>
                <th>Salary</th>
                <th>Attendance</th>
                <th>Delete</th>
                <th>Edit</th>
              </tr>
            </thead>

            <tbody>
              {data.map((item) => (
                <tr key={item.userid}>
                  <td>{item.userid}</td>
                  <td>{item.name}</td>
                  <td>{item.email}</td>
                  <td>{item.department}</td>
                  <td>{item.salary}</td>
                  <td>{item.attendance}</td>
                  <td>
                    <button onClick={deleteEmp}>{<MdDelete />}</button>
                  </td>
                  <td>
                    <button onClick={editEmp}>{<FaEdit />}</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Home;
