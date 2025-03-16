import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import SideNav from "../components/SideNav";
import Question from "../components/Question";
import MessageCard from "../components/MessageCard";
import Searchbar from "../components/Searchbar";
import Button from "../components/Button";
import { Link } from "react-router-dom";

const DashboardStudent = () => {
  const subjects = [
    "ASDII",
    "PII",
    "CDI",
    "MPI",
    "LFTA",
    "PP",
    "LE",
    "EWB",
    "PV",
    "PLA",
  ];
  const [number, setNumber] = useState(-1);

  const [selectedSubject, setSelectedSubject] = useState(subjects[0]);
  // const posts = [];
  const posts = [
    {
      post: "Mă puteți ajuta vă rog la capitolul 4? Nu reușesc să înțeleg listele simplu înlănțuite.",
      autor: "Ana Popescu",
      time: "14:53",
      helper: "Flavius Radin",
      comment:
        "Da sigur! Daca te uiti la fisiere pe classroom este un document cu teoria de la liste cu tot cu exemple.",
    },
    {
      post: "Are cineva idee cum sa aplic criteriul Clestelui la exercitiul 4 din extrasul 2 de la calcul diferential si integral?",
      autor: "Bogdan Vasilescu",
      time: "16:40",
      helper: "George Putnik",
      comment:
        "Trebuie sa incadrezi termenul respectiv intre alti doi termeni dupa care treci la limita, iar limita din mijloc da tinde si ea la celelalte doua.",
    },
    {
      post: "Cum pot mai exact aplica metoda DP la exericitul 5 pentru tema de la Logica Computationala?",
      autor: "Constantin Horia",
      time: "12:10",
      helper: "Tudor Nagy",
      comment:
        "Salut! Trebuie sa ai grija la cele 3 reguli. Prima data vezi daca se poate aplica regula literalului pur sau cea a clauzei cu un sigur literal. Daca nu aplici rezolutia.",
    },
    {
      post: "Ce proprietate are lambda la LFTA????",
      autor: "Aron Mihena",
      time: "10:30",
    },
    {
      post: "Cum verifica daca exista vocale intr-un sir de caractere? Daca imi poate explica cineva va rog pentru ca nu am inteles.",
      autor: "Blaj Alexandra",
      time: "22:45",
    },
    {
      post: "Are cineva codul de la exercitiul 2 de la liste circulare facut la seminarul 7?",
      autor: "Laslo Kevin",
      time: "19:23",
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
          <div className="flex-row center w100">
            <Searchbar  />
            <Link className="link" to="/create">
              <Button type="roundedButton">
                <i class="fa-solid fa-plus" />
              </Button>
            </Link>
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
          ) : number == -1 ? (
            posts.map((post, index) => {
              return (
                <Question
                  autor={post.autor}
                  time={post.time}
                  post={post.post}
                  key={index}
                  action={() => setNumber(index)}
                />
              );
            })
          ) : 
          <Question
                  autor={posts[number].autor}
                  time={posts[number].time}
                  post={posts[number].post}
                  comment={posts[number].comment}
                  helper={posts[number].helper}
                />
          }
        </div>
      </div>
    </>
  );
};

export default DashboardStudent;
