import { IoMdHome } from "react-icons/io";
import { MdFavoriteBorder } from "react-icons/md";
import { FaHistory } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./styles/Sidebar.css";
import { FaCode } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { SiJquery } from "react-icons/si";
import { FaBootstrap } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";
import { SiExpress } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import { FaPython } from "react-icons/fa";
import { IoTrendingUp } from "react-icons/io5";
import { IoMdMusicalNote } from "react-icons/io";
import { ImNewspaper } from "react-icons/im";
import { MdSportsCricket } from "react-icons/md";
import { MdAutorenew } from "react-icons/md";
import { TbMoodKid } from "react-icons/tb";
import { useContext } from "react";
import { Globaldata } from "../Helper/Globaldata";

const Sidebar = () => {
  const { setsearch,setsidebar } = useContext(Globaldata);

  const sidebarlink = [
    {
      name: "Home",
      path: "/",
      logo: <IoMdHome />,
    },
    {
      name: "Favorites",
      path: "/favorites",
      logo: <MdFavoriteBorder />,
    },
    {
      name: "History",
      path: "/history",
      logo: <FaHistory />,
    },
  ];

  const courselink = [
    {
      name: "Trending",
      path: "/search/trending",
      logo: <IoTrendingUp />,
    },
    {
      name: "Music",
      path: "/search/music",
      logo: <IoMdMusicalNote />,
    },
    {
      name: "News",
      path: "/search/news",
      logo: <ImNewspaper />,
    },
    {
      name: "Sports",
      path: "/search/sports",
      logo: <MdSportsCricket />,
    },
    {
      name: "Viral",
      path: "/search/viral",
      logo: <MdAutorenew />,
    },
    {
      name: " Cartoon",
      path: "/search/cartoon",
      logo: <TbMoodKid />,
    },
  ];

  const explorelink = [
    {
      name: "Coding",
      path: "/search/coding",
      logo: <FaCode />,
    },
    {
      name: "ReactJs",
      path: "/search/reactjs",
      logo: <FaReact />,
    },
    {
      name: "Javascript",
      path: "/search/javascript",
      logo: <IoLogoJavascript />,
    },
    {
      name: "Html",
      path: "/search/html",
      logo: <FaHtml5 />,
    },
    {
      name: " Css",
      path: "/search/css",
      logo: <FaCss3Alt />,
    },
    {
      name: "jQuery",
      path: "/search/jQuery",
      logo: <SiJquery />,
    },
    {
      name: "Bootstrap",
      path: "/search/Bootstrap",
      logo: <FaBootstrap />,
    },
    {
      name: "MongoDB",
      path: "/search/MongoDB",
      logo: <SiMongodb />,
    },
    {
      name: "ExpressJs",
      path: "/search/ExpressJs",
      logo: <SiExpress />,
    },
    {
      name: "NodeJs",
      path: "/search/NodeJs",
      logo: <FaNodeJs />,
    },
    {
      name: "Tailwind",
      path: "/search/Tailwind",
      logo: <FaCode />,
    },
    {
      name: "Python",
      path: "/search/Python",
      logo: <FaPython />,
    },

    {
      name: "C++",
      path: "/search/C++",
      logo: <FaCode />,
    },
    {
      name: "C",
      path: "/search/C",
      logo: <FaCode />,
    },
  ];
  return (
    <aside>
      <div className="sidebarlink">
        {sidebarlink.map((item, index) => {
          return (
            <Link key={index} to={item.path} onClick={() => setsidebar(true)}>
              <span className="icon">{item.logo} </span>
              <span className="name"> {item.name} </span>
            </Link>
          );
        })}
      </div>

      <div className="courselink">
        <h3>Explore </h3>
        {courselink.map((item, index) => {
          return (
            <Link
              key={index}
              to={"/"}
              onClick={() => {
                setsearch(item.name);
                setsidebar(true)
              }}
            >
              <span className="icon">{item.logo} </span>
              <span className="name"> {item.name} </span>
            </Link>
          );
        })}
      </div>

      <div className="explorelink">
        <h3>courses </h3>
        {explorelink.map((item, index) => {
          return (
            <Link
              key={index}
              to={"/"}
              onClick={() => {
                setsidebar(true)
                setsearch(item.name);
              }}
            >
              <span className="icon">{item.logo} </span>
              <span className="name"> {item.name} </span>
            </Link>
          );
        })}
      </div>
    </aside>
  );
};

export default Sidebar;
