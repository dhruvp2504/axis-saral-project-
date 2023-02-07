import { Link } from "react-router-dom";
import { isAdmin, isLogin, logOut } from "../../utils/CheckLogin";
import classes from "./NavBar.module.css";
import Dropdown from "react-bootstrap/Dropdown";
const Navbar = () => {
  const handleClick = () => {
    logOut();
    window.reload("/");
  };

  return (
    <header className={classes.header}>
      <div>
        <nav>
          <ul>
            <li>
              <Link to={isLogin ? "/news-feed" : "/"} className={classes.logo}>
                Axis Saral
              </Link>
            </li>
            <li>
              <Link to={"/employee-list"}>Employees</Link>
            </li>
            <li>
              <Link to={"/policy-documents"}>Policy Documents</Link>
            </li>
            <li>
              <Link to={"/projects"}>Projects</Link>
            </li>
            <li>
              <Link to={"/our-services"}>Our Services</Link>
            </li>
            <li>
              {isAdmin() ? (
                <Link to={"/send-mails"}>Notify Others</Link>
              ) : (
                <Link to="my-documents">My Documents</Link>
              )}
            </li>
            <li>
              {isLogin ? (
                <Link
                  to={""}
                  onClick={() => {
                    handleClick();
                  }}
                >
                  Log Out
                </Link>
              ) : (
                <Link to="log-in">Log in</Link>
              )}
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
