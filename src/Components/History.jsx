import { useContext } from "react";
import { Globaldata } from "../Helper/Globaldata";
import "./styles/Home.css";
const History = () => {
  const { userdata } = useContext(Globaldata);
  const history = userdata?.Email
    ? JSON.parse(localStorage.getItem("history" + userdata.Email))
    : JSON.parse(localStorage.getItem("guestHistory"));
  return (
    <main className="history home">
      <h1 style={{ textAlign: "center" }}>
        History of{" "}
        <span style={{ color: "red", textTransform: "capitalize" }}>
          {userdata?.Email.split("@")[0] || "Guest"}
        </span>
      </h1>
      <ul className="videocontainer">
        {history?.map((data,index) => {
          return (
            <li key={index} className="video" style={{ listStyle: "none" }}>
              <iframe
                src={`https://www.youtube.com/embed/${data.id}`}
                allowfullscreen
                allow="autoplay; encrypted-media; fullscreen; picture-in-picture"
              ></iframe>
              <div className="videoDetails">
                <h3>{data.title}</h3>
              </div>
            </li>
          );
        })}
      </ul>
    </main>
  );
};

export default History;
