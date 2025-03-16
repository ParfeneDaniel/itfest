import { useEffect, useState } from "react";
import Header from "../components/Header";
import AdminCard from "../components/AdminCard";
import "../styles/selector.css";
import Leaderboard from "./Leaderboard";
import axios from "../../api/axios";

const Admin = () => {
  const [value, setValue] = useState("cereri");
  const [requests, setRequests] = useState([]);
  const [universities, setUniversities] = useState([]);

  useEffect(() => {
    if (value === "cereri") {
      axios
        .get("admin/requests")
        .then((r) => setRequests(r.data.requests))
        .catch((e) => console.log(e));
    } else {
      axios
        .get("admin/requests")
        .then((r) => setUniversities(r.data.requests))
        .catch((e) => console.log(e));
    }
  }, [value]);
  console.log(requests);
  console.log(universities);
  return (
    <div>
      <Header type="admin" />
      <div id="dashboard" className="posts">
        <div className="left">
          <div id="custom-select">
            <select
              className="selector"
              name="selector"
              onChange={() => setValue(event.target.value)}
            >
              <option value="cereri">Cereri</option>
              <option value="facultati">Facultăți</option>
            </select>
          </div>
        </div>
        {value === "cereri"
          ? requests.map((request) => {
              return (
                <AdminCard
                  name={request.headmasterName}
                  email={request.email}
                  university={request.universityName}
                  details={request.description}
                  id={request._id}
                  key={request._id}
                />
              );
            })
          : universities.map((uni) => {
              return (
                <AdminCard
                  name={uni.headmasterName}
                  email={uni.email}
                  university={uni.universityName}
                  id={uni._id}
                  key={uni._id}
                />
              );
            })}
      </div>
    </div>
  );
};

export default Admin;
