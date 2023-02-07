import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
// import { Link } from "react-router-dom";
// im port PopUp from "../../components/PopUp/PopUp";
import classes from "./EmployeeList.module.css";

const EmployeeList = () => {
  const token = localStorage.getItem("jwt");
  const [empList, setEmpList] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  const [filteredResults, setFilteredResults] = useState([]);

  const searchItems = (searchValue) => {
    setSearchInput(searchValue);
    if (searchInput !== "") {
      const filteredData = empList.filter((item) => {
        return item.firstName.toLowerCase().includes(searchInput.toLowerCase());
      });
      setFilteredResults(filteredData);
    } else {
      setFilteredResults(empList);
    }
  };

  useEffect(() => {
    axios
      .get("http://localhost:8100/employees", {
        headers: {
          // 'Host': '<calculated when request is sent>',
          Authorization: `${token}`,
        },
      })
      .then((res) => {
        console.log(res.data);
        setEmpList(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [setEmpList]);
  return (
    <div>
      <form
        class="example"
        style={{
          "margin-left": "auto",
          "margin-right": "auto",
          "margin-top": "2rem",
          "max-width": "400px",
        }}
      >
        <input
          type="text"
          placeholder="Search.."
          name="search2"
          onChange={(e) => searchItems(e.target.value)}
        />
      </form>
      <table className={classes.empTable}>
        <caption>Employee Details</caption>
        <tr>
          <th>Name</th>
          <th>Designation</th>
          <th>Email ID</th>
          <th>Mobile Number</th>
          <th>Current Project</th>
        </tr>
        {/* {
        empList?.map((emp, key) => {
          return (
            <>
              <tr
                id={key}
                className={classes.empRow}
                // onClick={() => {
                //   setTrigger(true);
                // }}
              >
                <td>{`${emp.firstName} ${emp.middleName} ${emp.lastName}`}</td>
                <td>{emp.designation}</td>
                <td>{emp.emailId}</td>
                <td>{emp.mobileNumber}</td>
                <td>{emp.project.projectTitle}</td>
              </tr>
            </>
          );
        })} */}
        {searchInput.length > 1
          ? filteredResults?.map((emp, key) => {
              return (
                <tr
                  id={key}
                  className={classes.empRow}
                  // onClick={() => {
                  //   setTrigger(true);
                  // }}
                >
                  <td>{`${emp.firstName} ${emp.middleName} ${emp.lastName}`}</td>
                  <td>{emp.designation}</td>
                  <td>{emp.emailId}</td>
                  <td>{emp.mobileNumber}</td>
                  <td>{emp.project.projectTitle}</td>
                </tr>
              );
            })
          : empList?.map((emp, key) => {
              return (
                <tr
                  id={key}
                  className={classes.empRow}
                  // onClick={() => {
                  //   setTrigger(true);
                  // }}
                >
                  <td>{`${emp.firstName} ${emp.middleName} ${emp.lastName}`}</td>
                  <td>{emp.designation}</td>
                  <td>{emp.emailId}</td>
                  <td>{emp.mobileNumber}</td>
                  <td>{emp.project.projectTitle}</td>
                </tr>
              );
            })}
      </table>
    </div>
  );
};

export default EmployeeList;
