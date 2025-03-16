import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import SideNav from "../components/SideNav";
import Question from "../components/Question";
import MessageCard from "../components/MessageCard";
import Searchbar from "../components/Searchbar";
import Button from "../components/Button";
import { Link } from "react-router-dom";

const DashboardStudent = () => {
  const subjects = ["ASDII", "PII", "CDI", "MPI", "LE"];
  const [searchBarValue, setSearchBarValue] = useState("");

  const [selectedSubject, setSelectedSubject] = useState(subjects[0]);
  // const posts = [];
  const posts = [
    {
      title: "Ajutor",
      post: "Ex 3 de la tema doi va rog frumos",
      autor: "Marin Sorescu",
      time: "3:30",
    },
    {
      title: "Muie Chis",
      post: "%#$^#!&(!#@&%!#&%!#&*!Y*#!)#&^*#!#$~!#$%~#$%!$^!%&!#^&^*!#&^ mama lui de &^#@%#@^#%!@&*(!@^*(Q#^*Q#^*Q#&^*&",
      autor: "Bogdan",
      time: "3:40",
    },
    {
      title: "Cine stie sa faca tema",
      post: "eu nu",
      autor: "Constantin",
      time: "3:10",
    },
    {
      title: "MA LAS",
      post: "De ce exista matematica????",
      autor: "dodo",
      time: "1:00",
    },
  ];

  useEffect(() => {
    //request posts
  }, [selectedSubject]);

  return (
    <>
      <Header type="student" />
      <div className="flex-row">
        <SideNav
          subjects={subjects}
          selected={selectedSubject}
          setSelected={setSelectedSubject}
        />
        <div id="dashboard" className="posts">
          <div className="flex-row center">
            <Searchbar setValue={setSearchBarValue} />
            <Button type="roundedButton">
              <i class="fa-solid fa-plus" />
            </Button>
            <Link to="/leaderboard" className="link">
              <Button type="roundedButton">
                <i class="fa-solid fa-trophy" />
              </Button>
            </Link>
          </div>
          {posts.length == 0 ? (
            <MessageCard img="penPaper">
              Încă nu există postări pe acest canal. Fi primul care întreabă
              ceva! :)
            </MessageCard>
          ) : (
            posts.map((post, index) => {
              return (
                <Question
                  autor={post.autor}
                  time={post.time}
                  post={post.post}
                  key={index}
                />
              );
            })
          )}
        </div>
      </div>
    </>
  );
};

export default DashboardStudent;
