import axios from "axios";
import { useEffect, useState } from "react";
import "./IncrementLetter.css"

const IncrementLetter = () => {
  const token = localStorage.getItem("jwt");
  const [empList, setEmpList] = useState();
  const emailId = localStorage.getItem("emailId");

  const incrementDownload = () => {
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
          return (<>
          <p className="main-heading2">LETTER OF INCREMENT</p>
              <div className="address1">
                <p className="bold1">To,</p>
                <p>Name: {`${ele.firstName} ${ele.middleName} ${ele.lastName}`}</p>
                <p>ID: {ele.employeeId}</p>
                <p>Designation: {ele.designation}</p>
              </div>

              <p className="subject1">Subject: Salary Increment</p>

              <div className="para1">
                <p>Dear {ele.firstName},</p>
                <p>
                  We are pleased to inform you that your salary has been revised
                  under the annual increment policy. You will be entitled to get
                  an increment of 10% on your current C.T.C,
                  the new C.T.C. will be effective from the next month onwards.
                </p>
                <p>
                  Please find the enclosed annexure to know the breakup of your
                  new C.T.C.
                </p>
                <p>
                  We appreciate your efforts and hard work and hope the same
                  will continue in the further as well.
                </p>
                <p>Best wishes.</p>
              </div>
              <div className="right-bottom1">
                <p className="title1">For Axis Bank</p>
                <p>Signature</p>
              </div>
              <div >
                <button
                 type="submit"
                 variant="contained"
                 sx={{ mt: 1, mb: 1 }}
                 className="incrBtn"
                  onClick={incrementDownload}
                >
                  DOWNLOAD
                </button>
              </div>
          </>);
        }
      })}
    </>
  );
};

export default IncrementLetter;
