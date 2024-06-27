import { useContext, useEffect, useState } from "react";
import "./styles/Home.css";
import { Globaldata } from "../Helper/Globaldata";
import { FaHeart } from "react-icons/fa";
import { Link } from "react-router-dom";
const Home = () => {
  const { search, userdata } = useContext(Globaldata);
  const [query, setquery] = useState("t-series");
  const [type, setype] = useState("video");
  const [videos, setvideos] = useState([]);
  const [loader, setloader] = useState(false);

  const fetchData = () => {
    setloader(true);
    const key = [
      "32cf5737e2msh7b20ac2ddd36c99p1c4c91jsnc099cd7dcb1a",
      "b11835b5bdmsha015712e30472dfp18d9b9jsn8eaae440785f",
    ];
    const url = `https://yt-api.p.rapidapi.com/search?query=${query}&type=${type}`;
    const options = {
      method: "GET",
      headers: {
        "x-rapidapi-key": key[Math.floor(Math.random() * key.length)],
        "x-rapidapi-host": "yt-api.p.rapidapi.com",
      },
    };
    fetch(url, options)
      .then((res) => res.json())
      .then((videos) => {
        videos?.data?.length > 0 && setvideos(videos.data);
      })
      .catch((err) => console.log(err))
      .finally(() => setloader(false));
  };
  const saveHistory = (id) => {
    if (userdata?.Email) {
      const history =
        JSON.parse(localStorage.getItem("history" + userdata.Email)) || [];
      const newHistory = [...history, id];
      localStorage.setItem(
        "history" + userdata.Email,
        JSON.stringify(newHistory)
      );
    } else {
      const history = JSON.parse(localStorage.getItem("guestHistory")) || [];
      const newHistory = [...history, id];
      localStorage.setItem("guestHistory", JSON.stringify(newHistory));
    }
  };
  const saveFav = (id) => {
    if (userdata?.Email) {
      const Fav =
        JSON.parse(localStorage.getItem("Fav" + userdata.Email)) || [];
      const newFav = [...Fav, id];
      localStorage.setItem("Fav" + userdata.Email, JSON.stringify(newFav));
    } else {
      const Fav = JSON.parse(localStorage.getItem("guestFav")) || [];
      const newFav = [...Fav, id];
      localStorage.setItem("guestFav", JSON.stringify(newFav));
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    fetchData();
  }, [query, type]);

  useEffect(() => {
    setquery(search);
  }, [search]);

  function convertNumber(number) {
    if (number >= 1000000000) {
      return (number / 1000000000).toFixed(1) + "B";
    } else if (number >= 1000000) {
      return (number / 1000000).toFixed(1) + "M";
    } else if (number >= 1000) {
      return (number / 1000).toFixed(1) + "K";
    } else {
      return number;
    }
  }

  const link = [
    {
      name: "All",
      path: "/search/trend",
    },
    {
      name: "Music",
      path: "/search/music",
    },
    {
      name: "Indian Pop Music",
      path: "/search/pop",
    },
    {
      name: "Live",
      path: "/search/live",
    },
    {
      name: " Albums",
      path: "/search/albums",
    },
    {
      name: "T-series",
      path: "/search/tseries",
    },
    {
      name: "Jukebox",
      path: "/search/jukebox",
    },
    {
      name: "Lofi",
      path: "/search/lofi",
    },
    {
      name: "Gaming",
      path: "/search/gaming",
    },
    {
      name: "Dance",
      path: "/search/dance",
    },
    {
      name: "web-Developmenmt",
      path: "/search/webdev",
    },
    {
      name: "Fight",
      path: "/search/fight",
    },

    {
      name: "mantras",
      path: "/search/mantras",
    },
    {
      name: "Sad-songs",
      path: "/search/sad",
    },
  ];

  return (
    <main className="home">
      <div className="link">
        {link.map((item, index) => {
          return (
            <div key={index} onClick={() => setquery(item.name)}>
              <span className="name"> {item.name} </span>
            </div>
          );
        })}
      </div>
      <div className="search-info">
        {
          <span>
            Search results found for <b style={{ color: "red" }}>{query}</b>
          </span>
        }
      </div>
      <div className="videocontainer">
        {videos.length > 0 && !loader ? (
          videos.filter(item => item.type === "video").map((item, index) => {
            return (
              <Link
                to={"/video/" + item.videoId}
                key={index}
                className="video"
                onClick={() =>
                  saveHistory({ id: item.videoId, title: item.title })
                }
              >
                <div
                  className="icon fav"
                  onClick={(e) => {
                    saveFav({ id: item.videoId, title: item.title });
                    e.target.parentElement.parentElement.classList.add(
                      "active"
                    );
                  }}
                >
                  <FaHeart />
                </div>
                <iframe
                  src={`https://www.youtube.com/embed/${item.videoId}`}
                  allowFullScreen
                  allow="autoplay; encrypted-media; fullscreen; picture-in-picture"
                ></iframe>
                <div className="videoDetails">
                  <h3>{item.title}</h3>
                  <p className="views">
                    {convertNumber(item.viewCount)} views {item.publishDate}
                  </p>
                </div>
              </Link>
            );
          })
        ) : (
          <h1>Loading...</h1>
        )}
      </div>
    </main>
  );
};

export default Home;
