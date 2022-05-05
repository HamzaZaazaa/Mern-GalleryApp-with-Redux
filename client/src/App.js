import { Route, Routes } from "react-router-dom";
import NavBarr from "./components/navbar/NavBarr";
import Signup from "./components/signup/Signup";
import Login from "./components/login/Login";
import HomePage from "./components/home/HomePage";
import Profile from "./components/profile/Profile";
function App() {
  return (
    <div>
      <NavBarr />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/login' element={<Login />} />
        <Route path='/profile' element={<Profile />} />
      </Routes>
    </div>
  );
}

export default App;
