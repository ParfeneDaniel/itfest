import React from "react";
import "../styles/user-card.css";
import Header from "../components/Header";
import { Link } from "react-router-dom";
import Button from "../components/Button";

const Profile = () => {
  return (
    <>
      <Header />

      <div id="dashboard">
        <div className="right absolute">
          <Link to="/student" className="link">
            <Button action="" type="filledButton roundedButton">
              <i class="fa-solid fa-arrow-left"></i>
            </Button>
          </Link>
        </div>
        <div className="user-card">
          <div className="user-info">
            <i className="fa-solid fa-circle-user"></i>
            <div className="info">
              <p>Poepscu Ion</p>
              <p>popescuion@gmail.com</p>
            </div>
          </div>
          <div className="content-container">
            <div className="field-container">
              <div className="field-name">
                <label for="name">Nume</label>
                <input type="text" id="name" className="input" />
              </div>
              <div className="field-description">
                <label for="description">Descriere</label>
                <textarea
                  name="description"
                  id="description"
                  className="textarea"
                ></textarea>
              </div>
            </div>
            <div className="data-container">
              <div className="data-upvotes">
                <p>All time upvotes:</p>
                <div className="upvotes-container">
                  <p>16</p>
                  <i className="fa-solid fa-arrow-up"></i>
                </div>
              </div>
              <button className="filledButton medium change-password">
                Change Password
              </button>
            </div>
          </div>
          <div className="button-container">
            <button className="filledButton medium">Save</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
