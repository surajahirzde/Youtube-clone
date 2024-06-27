import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Rootlayout from "./Helper/Rootlayout";
import Errorpage from "./Helper/Errorpage";
import Home from "./Components/Home";
import Login from "./Components/Login";
import { Globaldata } from "./Helper/Globaldata";
import { useEffect, useState } from "react";
import History from "./Components/History";
import VideoPlayer from "./Components/VideoPlayer";
import Favor from "./Components/Favor";

const App = () => {
  const [userdata, setuserdata] = useState([]);
  const [search, setsearch] = useState("");
  const [sidebar, setsidebar] = useState(false);
  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("user")) || [];
    setuserdata(data);
  }, []);
  const routes = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Rootlayout />} errorElement={<Errorpage />}>
        <Route index element={<Home />} />
        <Route path="/video/:vId" element={<VideoPlayer />} />
        <Route path="/login" element={<Login btnName="Login" />} />
        <Route path="/register" element={<Login btnName="Register" />} />
        <Route path="/history" element={<History />} />
        <Route path="/favorites" element={<Favor />} />
      </Route>
    )
  );
  return (
    <Globaldata.Provider
      value={{ userdata, setuserdata, sidebar, setsidebar, search, setsearch }}
    >
      <RouterProvider router={routes} />
    </Globaldata.Provider>
  );
};

export default App;
