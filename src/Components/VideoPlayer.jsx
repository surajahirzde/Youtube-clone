import { useParams } from "react-router-dom";
import "./styles/Home.css"
const VideoPlayer = () => {
  const { vId } = useParams();
  return (
    <main className="home videoPlayer">
      <iframe
        width={"100%"}
        height={500}
        src={`https://www.youtube.com/embed/${vId}`}
        allowFullScreen
        allow="autoplay; encrypted-media; fullscreen; picture-in-picture"
      />
      <div className="video-details"></div>
    </main>
  );
};

export default VideoPlayer;
