import classes from "./PopUp.module.css";

const PopUp = (props) => {
  return props.trigger ? (
    <div className={classes.popUp}>
      <div className={classes.popUpInner}>
        <button
          className={classes.closeButton}
          onClick={() => props.setTrigger(false)}
        >
          X
        </button>
        <div className={classes.leftCont}>
          <ul>
            <li>{`Name: ${props.children.firstName} ${props.children.middleName} ${props.children.lastName}`}</li>
            <li>{`Gender: ${props.children.gender}`}</li>
            <li>{`Date Of Birth: ${props.children.dateOfBirth}`}</li>
            <li>{`Email ID: ${props.children.emailId}`}</li>
            <li>{`Contact Number: +91 ${props.children.mobileNumber}`}</li>
            <li>{`Date Of Joining: ${props.children.dateOfJoining}`}</li>
          </ul>
        </div>
        <div className={classes.rightCont}>
          <img src={props.children.profilePhoto} />
        </div>
        <div className={classes.bottomCont}>
          <ul>
            <li>{`Current Project Name: ${props.children.project.projectTitle}`}</li>
            <li>{`Project Manager: ${props.children.project.projectOwner}`}</li>
            <li>{`Email ID: ${props.children.project.startingDate}`}</li>
            <li>{`Status: ${props.children.project.projectStatus}`}</li>
          </ul>
        </div>
      </div>
    </div>
  ) : (
    ""
  );
};

export default PopUp;
