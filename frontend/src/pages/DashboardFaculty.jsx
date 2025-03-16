import React, { useState } from "react";
import Header from "../components/Header";
import SideNav from "../components/SideNav";
import AddStudentCard from "../components/AddStudentCard";
import HeadmasterCard from "../components/HeadmasterCard";
import GroupCard from "../components/GroupCard";
import StudentCard from "../components/StudentCard";
import AddPostCard from "../components/AddPostCard";
import Button from "../components/Button";

const DashboardFaculty = () => {
  const [selected, setSelected] = useState("Grupe");
  const [openedGroup, setOpenedGroup] = useState("");

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
          {openedGroup && (
            <div className="right center-h">
              <Button type="roundedButton" action={() => setOpenedGroup("")}>
                <i class="fa-solid fa-arrow-left"></i>
              </Button>
              <h1 className="bigText">{openedGroup}</h1>
            </div>
          )}
          {openedGroup === ""
            ? groups.map((name, index) => {
                return (
                  <HeadmasterCard
                    name={name}
                    key={index}
                    action={() => setOpenedGroup(name)}
                  />
                );
              })
            : (
              <GroupCard number={3} students={["Ana", "Maya", "Daniel"]}/>
            )}
          {/* <AddStudentCard />
          <GroupCard number={3} />
          <StudentCard email="maya.grozav06@e-uvt.ro" />
          <AddPostCard /> */}
        </div>
      </div>
    </>
  );
};

export default DashboardFaculty;
