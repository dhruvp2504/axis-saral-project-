
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import "./AppointmentLetter.css";

const AppointmentLetter = () => {
  const token = localStorage.getItem("jwt");
  const [empList, setEmpList] = useState();
  const emailId = localStorage.getItem("emailId");

  const apptletterdownload = () => {
    window.print();
  }

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
              <p className="main-heading"> LETTER OF APPOINTMENT</p>

              <div className="leftSide">
                <p className="title">Date: {ele.dateOfJoining}</p>
                <p className="title">{`Name: ${ele.firstName} ${ele.middleName} ${ele.lastName}`}</p>
              </div>
              <div className="letter-area">
                <p className="name"> Dear {ele.firstName},</p>
                <p className="name"><b>Subject: Appointed as {ele.designation}</b></p>
                <p className="para">
                  We refer to your recent interview for the above position and
                  are pleased to inform you that we are offering you the
                  position with our company effective from {ele.dateOfJoining}{" "}
                  under the following terms:
                </p>

                <p className="title1">
                  Salary: The salary offered to the candidate during the
                  interview
                </p>
                <p className="title1">
                  Probationary Period: The salary offered to the candidate
                  during the interview
                </p>

                <p className="title1">
                  Working Hours: The salary offered to the candidate during the
                  interview
                </p>

                <p className="title1">
                  Leave Policy: The salary offered to the candidate during the
                  interview
                </p>

                <p className="left-bottom">{ele.employeeName}</p>
                <p className="right-bottom">Axis Fintech</p>
                <br />
              </div>
              <div>
                <button className="appBtn"
                  type="submit"
                  variant="contained"
                  sx={{ mt: 1, mb: 1 }}
                  id="btnlogin"
                  onClick={()=>apptletterdownload()}
                >
                  DOWNLOAD
                </button>
              </div>
            </>
          );
        }
      })}
    </>
  );
};

export default AppointmentLetter;
