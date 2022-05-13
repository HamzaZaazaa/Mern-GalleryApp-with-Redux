import { Route, Routes } from "react-router-dom";
import NavBarr from "./components/navbar/NavBarr";
import Signup from "./components/signup/Signup";
import Login from "./components/login/Login";
import HomePage from "./components/home/HomePage";
import Profile from "./components/profile/Profile";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { identifier } from "./redux/actions/authActions";
import PrivateRoute from "./routing/PrivateRoute";
import Error from "./Attachments/Error";
import Gallery from "./components/gallery/Gallery";
function App() {
  const dispatch = useDispatch();
  // in app to work in every component
  useEffect(() => {
    dispatch(identifier());
  }, [dispatch]);
  return (
    <div>
      <NavBarr />
      <Error />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/login' element={<Login />} />
        <Route
          path='/profile'
          element={
            <PrivateRoute>
              <Profile />
            </PrivateRoute>
          }
        />
        <Route
          path='gallery'
          element={
            <PrivateRoute>
              <Gallery />
            </PrivateRoute>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
