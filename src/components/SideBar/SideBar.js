import classes from './SideBar.module.css'

function Sidebar(props) {
    return (
      <div className={classes.sidebar}>
        <h2>Sidebar</h2>
        <p onClick={props.setDisplaySop(3)}>Human Rights Policy Pdf</p>
        <p onClick={props.setDisplaySop(0)}>ESG Policy Pdf</p>
        <p onClick={props.setDisplaySop(2)}>Tax Policy of Bank Pdf</p>
      </div>
    );
  }
  
  export default Sidebar;