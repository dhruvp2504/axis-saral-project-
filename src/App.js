import EmptyNavBar from "./components/NavBar/EmptyNavBar";
import Navbar from "./components/NavBar/NavBar";
import { isLogin } from "./utils/CheckLogin";
import BaseRouter from "./router/BaseRouter";

function App() {
  return (
    <>
    {isLogin? <Navbar /> : <EmptyNavBar/>}
    <BaseRouter />
    </>
  );
}

export default App;
