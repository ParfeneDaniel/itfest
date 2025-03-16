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
  const [addStudent, setAddStudent] = useState(false);

  const groups = [
    "IR1",
    "IR2",
    "IR3",
    "AI1",
    "IE2",
    "IR2",
    "IR3",
    "AI1",
    "IE2",
  ];
  const groups2 = [
    { number: 1, students: ["Ana", "Ana"] },
    { number: 2, students: ["Poco", "Poco", "Poco"] },
    { number: 3, students: ["Ana", "Poco", "Ana"] },
  ];
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
          {addStudent && (
            <div className="right center-h">
              <Button type="roundedButton" action={() => setAddStudent(false)}>
                <i class="fa-solid fa-arrow-left"></i>
              </Button>
              <h1 className="bigText">{openedGroup}</h1>
            </div>
          )}
          {openedGroup === "" && !addStudent ? (
            <div className="w100 gap">
              <div className="left">
              <Button type="filledButton medium">Adaugă persoane</Button>
              <Button type="filledButton medium">Creează consturi</Button>
              </div>
              {groups.map((name, index) => {
                return (
                  <HeadmasterCard
                    name={name}
                    key={index}
                    action={() => setOpenedGroup(name)}
                  />
                );
              })}
            </div>
          ) : (
            groups2.map((group, index) => {
              return (
                <GroupCard number={group.number} students={group.students} />
              );
            })
          )}
          {/* <AddStudentCard />
          <AddPostCard /> */}
        </div>
      </div>
    </>
  );
};

export default DashboardFaculty;
