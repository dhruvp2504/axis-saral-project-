import { useNavigate } from "react-router-dom";
import classes from "./MyDocuments.module.css";

const MyDocuments = () => {
  const navigate = useNavigate();
  const previewJoiningLetter = (e) => {
    e.preventDefault();
    navigate("/joining-letter");
  };
  const previewAppointmentLetter = (e) => {
    navigate("/appointment-letter");
  };
  const previewIncrementLetter = (e) => {
    e.preventDefault();
    navigate("/increment-letter");
  };
  const previewSalarySlip = (e) => {
    e.preventDefault();
    navigate("/salaryslip");
  };
  return (
    <div className={classes.docsContainer}>
      <div className={classes.btnCss}>
        <button
          onClick={(e) => {
            previewJoiningLetter(e);
          }}
          className={classes.docsBtn}
        >
          Joining Letter
        </button>
      </div>
      <div className={classes.btnCss}>
        <button
          onClick={(e) => {
            previewAppointmentLetter(e);
          }}
          className={classes.docsBtn}
        >
          Appointment Letter
        </button>
      </div>
      <div className={classes.btnCss}>
        <button
          onClick={(e) => {
            previewIncrementLetter(e);
          }}
          className={classes.docsBtn}
        >
          Increment Letter
        </button>
      </div>
      <div className={classes.btnCss}>
        <button
          onClick={(e) => {
            previewSalarySlip(e);
          }}
          className={classes.docsBtn}
        >
          SalarySlip
        </button>
      </div>
    </div>
  );
};

export default MyDocuments;
