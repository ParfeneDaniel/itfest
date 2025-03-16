import React, { useState } from "react";
import Header from "../components/Header";
import SideNav from "../components/SideNav";
import AddStudentCard from "../components/AddStudentCard";
import HeadmasterCard from "../components/HeadmasterCard";
import GroupCard from "../components/GroupCard";

const DashboardFaculty = () => {
  const [selected, setSelected] = useState("Grupe");
  const groups = ["IR1", "IR2", "IR3", "AI1", "IE2"];
  return (
    <>
      <Header />
      <div className="flex-row">
        <SideNav
          subjects={["Grupe", "Setări"]}
          selected={selected}
          setSelected={setSelected}
        />
        <div id="dashboard" className="posts">
          {groups.map((name, index) => {
            return <HeadmasterCard name={name} />;
          })}
          <AddStudentCard />
          <GroupCard number={3} />
        </div>
      </div>
    </>
  );
};

export default DashboardFaculty;
