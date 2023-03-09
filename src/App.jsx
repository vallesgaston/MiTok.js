import { useState } from "react";

import "./App.css";
import VideoPlayer from "./assets/VideoPlayer";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <main>
        MiTok Clone
        <VideoPlayer />
      </main>
    </div>
  );
}

export default App;
