const Home = () => {
  return (
    <div className="home">
      <div className="home_container">
        <video src="/videos/video-1.mp4" muted loop autoPlay />
        <h1 className="home_h1">placeholder for h1</h1>
        <p className="home_p">placeholder for p tag</p>
        <div className="home_btns">
          <button className="btn btn_first">btn left</button>
          <button className="btn btn_second">btn right</button>
        </div>
      </div>
    </div>
  );
};

export default Home;
