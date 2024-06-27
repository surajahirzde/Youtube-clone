import { Outlet } from "react-router-dom";
import Header from "../Components/Header";
import Sidebar from "../Components/Sidebar";
import Login from "../Components/Login";
import { useContext } from "react";
import { Globaldata } from "./Globaldata";


const Rootlayout = () => {
  const {sidebar}=useContext(Globaldata)
  return (
    <>
      <Header/>


      <div className={`main ${sidebar && "active"}`}>
      <Sidebar/>
      <Outlet/>

      </div>

   
    </>
  )
}

export default Rootlayout
