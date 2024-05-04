import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home/Home";
import Teachers from "./pages/Teachers/Teachers";
import User from "./pages/User/User";
import Favorites from "./pages/Favorites/Favorites";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";

function App() {

  return (
    <Routes>
     <Route path="/" element={<Layout/>}>
      <Route index element={<Home/>}/>
      <Route path="teachers" element={<Teachers/>}/>
      <Route path="user" element={<User/>}/>
      <Route path="favorites" element={<Favorites/>}/>
      <Route path="login" element={<Login/>}/>
      <Route path="register" element={<Register/>}/>
     </Route>
    </Routes>
  );
}

export default App;
