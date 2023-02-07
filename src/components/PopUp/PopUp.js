import classes from "./PopUp.module.css";

const PopUp = (props) => {
  return props.trigger ? (
    <div className={classes.popUp}>
      <div className={classes.popUpInner}>
        <button className={classes.closeButton} onClick={() => props.setButtonPopup(false)}>X</button>
      </div>
    </div>
  ) : (
    ""
  );
};

export default PopUp;
