import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home/Home";
import Teachers from "./pages/Teachers/Teachers";
import User from "./pages/User/User";


function App() {
  return (
    <Routes>
     <Route path="/" element={<Layout/>}>
      <Route index element={<Home/>}/>
      <Route path="teachers" element={<Teachers/>}/>
      <Route path="user" element={<User/>}/>
     </Route>
    </Routes>
  );
}

export default App;
