import React from "react";
import "../styles/leaderboard.css";

const Leaderboard = () => {
  return (
    <div id="leaderboard-container">
      <h1 className="leaderboard-title">Topul Lunii</h1>
      <div className="leaderboard-content">
        <div className="leaderboard-ranking">
          <div className="leaderboard-ranking-top">
            <div className="leaderboard-ranking-content">
              <div className="data-container">
                <i className="fa-solid fa-medal rank-1"></i>
                <p>Popescu Ion</p>
              </div>
              <div className="upvotes-container">
                <p>18</p>
                <i className="fa-solid fa-arrow-up"></i>
              </div>
            </div>

            <div className="leaderboard-ranking-content">
              <div className="data-container">
                <i className="fa-solid fa-medal rank-2"></i>
                <p>Popescu Ion</p>
              </div>
              <div className="upvotes-container">
                <p>18</p>
                <i className="fa-solid fa-arrow-up"></i>
              </div>
            </div>

            <div className="leaderboard-ranking-content">
              <div className="data-container">
                <i className="fa-solid fa-medal rank-3"></i>
                <p>Popescu Ion</p>
              </div>

              <div className="upvotes-container">
                <p>18</p>
                <i className="fa-solid fa-arrow-up"></i>
              </div>
            </div>
          </div>
          <div className="dots-container">
            <i className="fa-solid fa-circle"></i>
            <i className="fa-solid fa-circle"></i>
            <i className="fa-solid fa-circle"></i>
          </div>
          <div className="leaderboard-ranking-top">
            <div className="leaderboard-ranking-content">
              <div className="data-container">
                <p>5</p>
                <p>Popescu Ion</p>
              </div>
              <div className="upvotes-container">
                <p>18</p>
                <i className="fa-solid fa-arrow-up"></i>
              </div>
            </div>
          </div>
        </div>

        <div class="statistic-container">
          <div class="div-container">
            <p>2</p>
            <div class="upvotes-container">
              <p>15</p>
              <i class="fa-solid fa-arrow-up"></i>
            </div>
          </div>
          <div class="div-container">
            <p>1</p>
            <div class="upvotes-container">
              <p>18</p>
              <i class="fa-solid fa-arrow-up"></i>
            </div>
          </div>
          <div class="div-container">
            <p>3</p>
            <div class="upvotes-container">
              <p>10</p>
              <i class="fa-solid fa-arrow-up"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Leaderboard;
