import { useState } from "react";
import Header from "../components/Header";
import RequestCard from "../components/AdminCard";
import "../styles/selector.css";

const Admin = () => {
  const [value, setValue] = useState("cereri");
  const requests = [
      {
        name: "Cosmin Bonchis",
        email: "bonchis@e-uvt.ro",
        university: "Facultatea de Matematică și Informatică, Universitatea de Vest Timișoara",
        details: "Colaboram?",
      },
      {
        name: "Ana",
        email: "ana@e-uvt.ro",
        university: "FEEA",
        details: "Colaboram si noi?",
      },
    ],
    faculties = [
      {
        name: "Maria",
        email: "maria@e-uvt.ro",
        university: "UVT",
      },
      {
        name: "Maya",
        email: "maya@e-uvt.ro",
        university: "UBB",
      },
    ];

  return (
    <div>
      <Header type="admin" />
      <div id="dashboard">
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
          ? requests.map((request, index) => {
              return (
                <RequestCard
                  name={request.name}
                  email={request.email}
                  university={request.university}
                  details={request.details}
                  key={index}
                />
              );
            })
          : faculties.map((request, index) => {
              return (
                <RequestCard
                  name={request.name}
                  email={request.email}
                  university={request.university}
                  key={index}
                />
              );
            })}
      </div>
    </div>
  );
};

export default Admin;
