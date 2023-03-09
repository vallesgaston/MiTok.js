const SRC = (
  <video
    class
    playsinline="true"
    x5-playsinline="true"
    webkit-playsinline="true"
    tabindex="2"
    mediatype="video"
    src="https://v16-webapp-prime.tiktok.com/video/tos/useast2a/tos-useast2a-…pe=2&policy=2&signature=1628995…&tk=tt_chain_token"
  ></video>
);

export default function VideoPlayer() {
  return <video src={SRC} controls={false} />;
}
