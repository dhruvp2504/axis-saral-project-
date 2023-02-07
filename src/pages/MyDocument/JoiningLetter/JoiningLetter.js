import axios from "axios";
import { useEffect, useState } from "react";
import './JoiningLetter.css'

const JoiningLetter = () => {
  const token = localStorage.getItem("jwt");
  const [empList, setEmpList] = useState();
  const emailId = localStorage.getItem("emailId");

  const joinletterdownload = () => {
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

  return (<>
  {empList?.map((ele) => {
    if(ele.emailId === emailId){
        return(
            <>
            <p className="main-heading1"> LETTER OF JOINING</p>
              <div className="address">
                <p>General Manager</p>
                <p>Human Resource Department</p>
              </div>
              <div className="subject">
                <p><b>Subject: Joining Letter from Employer</b></p>
              </div>
              <div className="para1">
                <p>Dear {`${ele.firstName} ${ele.middleName} ${ele.lastName}`},</p>
                <p>
                  This letter is related to your job offer letter, We are glad
                  to offer you the job opportunity for the position{" "}
                  {ele.designation} at our company. You will be joining
                  the company from date {ele.dateOfJoining}.
                </p>
                <p>
                  Kindly contact us by replying to this email for any
                  information required.
                </p>
                <p>Looking forward to working with you.</p>
                <p><b>Yours faithfully,</b></p>
                <p className="bold">HR Manager, Axis Bank</p>
              </div>
              <div>
                <button
                  type="submit"
                  variant="contained"
                  sx={{ mt: 1, mb: 1 }}
                  className="joinBtn"
                  onClick={() => {joinletterdownload()}}
                >
                  DOWNLOAD
                </button>
              </div>
            </>
        );
    }
  })}
  </>);
};

export default JoiningLetter;
