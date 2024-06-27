import { useContext } from "react";
import { Globaldata } from "../Helper/Globaldata";
import "./styles/Home.css";
import { Link } from "react-router-dom";
const Favor = () => {
  const { userdata } = useContext(Globaldata);
  const history = userdata?.Email
    ? JSON.parse(localStorage.getItem("Fav" + userdata.Email))
    : JSON.parse(localStorage.getItem("guestFav"));
  return (
    <main className="history home">
      <h1 style={{textAlign:"center"}}>Favorites of <span style={{color:"red"}}>{userdata?.Email?.split('@')[0] || "Guest"}</span></h1>
      <ul className="videocontainer">
        {history?.map((data, index) => {
          return (
            <Link
              to={`/video/${data.id}`}
              key={index}
              className="video"
              style={{ listStyle: "none" }}
            >
              <iframe
                src={`https://www.youtube.com/embed/${data.id}`}
                allowFullScreen
                allow="autoplay; encrypted-media; fullscreen; picture-in-picture"
              ></iframe>
              <div className="videoDetails">
                <h3>{data.title}</h3>
              </div>
            </Link>
          );
        })}
      </ul>
    </main>
  );
};

export default Favor;
