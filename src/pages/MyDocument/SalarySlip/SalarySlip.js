import axios from "axios";
import { useEffect, useState } from "react";
import "./SalarySlip.css";

const SalarySlip = () => {
  const token = localStorage.getItem("jwt");
  const [empList, setEmpList] = useState();
  const emailId = localStorage.getItem("emailId");

  const salaryDownload = () => {
    window.print();
  };

  useEffect(() => {
    axios
      .get("http://localhost:8100/employees", {
        headers: {
          Authorization: `${token}`,
        },
      })
      .then((res) => {
        setEmpList(res.data);
        console.log(empList);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      {empList?.map((ele) => {
        if (ele.emailId === emailId) {
          return (
            <>
              <div className="centerSalarySlip">
                <div className="tblContent">
                  <table className="tableContainer">
                    <caption>{`Name: ${ele.firstName} ${ele.middleName} ${ele.lastName}`}</caption>
                    <thead>
                      <tr className="empFields">
                        <th>
                          Employee ID:{" "}
                          <span style={{ paddingLeft: "5rem" }}>
                            {ele.employeeId}
                          </span>
                        </th>
                      </tr>

                      <tr className="empFields">
                        <th>
                          Designation:{" "}
                          <span style={{ paddingLeft: "5rem" }}>
                            {ele.designation}
                          </span>
                        </th>
                      </tr>

                      <br />

                      <tr className="heading">
                        <th>Standard Monthly Salary</th>
                      </tr>

                      <tr>
                        <th className="dataFields">Basic Pay</th>

                        <td>{(70 / 100) * ele.salary}</td>
                      </tr>

                      <tr>
                        <th className="dataFields">Allowance</th>

                        <td>{(3 / 100) * ele.salary}</td>
                      </tr>

                      <tr>
                        <th className="dataFields">Location Pay</th>

                        <td>{(10 / 100) * ele.salary}</td>
                      </tr>

                      <tr>
                        <th className="dataFields">Benefits Pay</th>

                        <td>{(4 / 100) * ele.salary}</td>
                      </tr>

                      <tr>
                        <th className="dataFields">PF Contribution</th>

                        <td>{(13 / 100) * ele.salary}</td>
                      </tr>

                      <tr className="salary">
                        <th className="dataFields">Net Pay</th>

                        <td>{ele.salary}</td>
                      </tr>
                    </thead>
                  </table>
                </div>
                <div >
                  <button
                    type="submit"
                    variant="contained"
                    sx={{ mt: 1, mb: 1 }}
                    className="salBtn"
                    onClick={() => {
                      salaryDownload();
                    }}
                  >
                    DOWNLOAD
                  </button>
                </div>
              </div>
            </>
          );
        }
      })}
    </>
  );
};

export default SalarySlip;
