import "./Welcome.css";
import { useNavigate } from "react-router-dom";

function Welcome() {
  const nav = useNavigate();

  return (
    <div className="welcome-page-container">
      <div className="about-box">
        <p className="about-text">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo
          sequi enim ipsa. Velit repellendus ullam perspiciatis eum neque
          reiciendis. Possimus animi ratione velit repudiandae aperiam eos vel
          facilis suscipit! Quae nisi molestiae neque, et sit minus fugiat
          dignissimos totam beatae voluptas distinctio reprehenderit, aliquid
          mollitia tempora esse, libero ipsa aspernatur voluptatem cumque nobis.
          Voluptatibus dolor, eum culpa deleniti sit dignissimos sequi commodi
          nulla ex vel, ipsa, esse quia quasi repudiandae quaerat aut doloribus
          ipsum veniam accusamus doloremque!
        </p>
      </div>

      <button onClick={() => nav("/main")} className="welcome-page-btn">
        Continue
      </button>
    </div>
  );
}

export default Welcome;
