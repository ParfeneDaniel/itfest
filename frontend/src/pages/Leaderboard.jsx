import React from "react";
import "../styles/leaderboard.css";
import Header from "../components/Header";

const Leaderboard = () => {
  const leaderboard = [
    {
      name: "Parfene Daniel",
      upvotes: 10,
    },
    {
      name: "Grozav Maya",
      upvotes: 5,
    },
    {
      name: "Fraieru fraierilor",
      upvotes: 1,
    },
    {
      name: "Cum Supărare",
      upvotes: -1,
      place: 12,
    },
  ];
  const height2 = (leaderboard[1].upvotes / leaderboard[0].upvotes) * 60;
  const height3 = (leaderboard[2].upvotes / leaderboard[0].upvotes) * 60;

  return (
    <>
      <Header />
      <div id="dashboard" className="posts">
        <div id="leaderboard-container">
          <h1 className="leaderboard-title">Topul Lunii</h1>
          <div className="leaderboard-content">
            <div className="leaderboard-ranking">
              <div className="leaderboard-ranking-top">
                <div
                  className={
                    "leaderboard-ranking-content " +
                    (leaderboard[3].place == 1 ? "user-rank" : "")
                  }
                >
                  <div className="data-container">
                    <i className="fa-solid fa-medal rank-1"></i>
                    <p>{leaderboard[0].name}</p>
                  </div>
                  <div className="upvotes-container">
                    <p>{leaderboard[0].upvotes}</p>
                    <i className="fa-solid fa-arrow-up"></i>
                  </div>
                </div>

                <div
                  className={
                    "leaderboard-ranking-content " +
                    (leaderboard[3].place == 2 ? "user-rank" : "")
                  }
                >
                  <div className="data-container">
                    <i className="fa-solid fa-medal rank-2"></i>
                    <p>{leaderboard[1].name}</p>
                  </div>
                  <div className="upvotes-container">
                    <p>{leaderboard[1].upvotes}</p>
                    <i className="fa-solid fa-arrow-up"></i>
                  </div>
                </div>

                <div
                  className={
                    "leaderboard-ranking-content " +
                    (leaderboard[3].place == 3 ? "user-rank" : "")
                  }
                >
                  <div className="data-container">
                    <i className="fa-solid fa-medal rank-3"></i>
                    <p>{leaderboard[2].name}</p>
                  </div>

                  <div className="upvotes-container">
                    <p>{leaderboard[2].upvotes}</p>
                    <i className="fa-solid fa-arrow-up"></i>
                  </div>
                </div>
              </div>
              {leaderboard[3].place <= 3 ? null : (
                <div>
                  <div className="dots-container">
                    <i className="fa-solid fa-circle"></i>
                    <i className="fa-solid fa-circle"></i>
                    <i className="fa-solid fa-circle"></i>
                  </div>
                  <div className="leaderboard-ranking-top">
                    <div className="leaderboard-ranking-content user-rank">
                      <div className="data-container">
                        <p>{leaderboard[3].place}</p>
                        <p>{leaderboard[3].name}</p>
                      </div>
                      <div className="upvotes-container">
                        <p>{leaderboard[3].upvotes}</p>
                        <i className="fa-solid fa-arrow-up"></i>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            <div class="statistic-container">
              <div class="div-container" style={{ height: height2 + "vh" }}>
                <p>2</p>
                <div class="upvotes-container">
                  <p>{leaderboard[1].upvotes}</p>
                  <i class="fa-solid fa-arrow-up"></i>
                </div>
              </div>
              <div class="div-container">
                <p>1</p>
                <div class="upvotes-container">
                  <p>{leaderboard[0].upvotes}</p>
                  <i class="fa-solid fa-arrow-up"></i>
                </div>
              </div>
              <div
                class="div-container"
                style={{
                  height: height3 + "vh",
                }}
              >
                <p>3</p>
                <div class="upvotes-container">
                  <p>{leaderboard[2].upvotes}</p>
                  <i class="fa-solid fa-arrow-up"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Leaderboard;
