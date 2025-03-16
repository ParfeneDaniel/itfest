import { useState } from "react";
import Form from "../components/Form";
import Header from "../components/Header";
import axios from "../../api/axios";
import { useNavigate } from "react-router-dom";


const Login = () => {
  const navigate = useNavigate();
  const [selectedValue, setSelectedValue] = useState("student");

  const password = {
      type: "input",
      name: "password",
      label: "Password",
      inputType: "password",
    },
    email = {
      type: "input",
      label: "Email",
      inputType: "email",
      name: "email",
    },
    button = {
      text: "Conectează-te",
      type: "filledButton medium pointer",
      action: "",
    };
    
  const onSubmit = (data) => {
    axios
      .post("auth/login", data)
      .then((response) => {
        console.log(response);
        navigate("/admin");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <Header />
      <div id="dashboard" className="posts">
        <Form
          selectedValue={selectedValue}
          setSelectedValue={setSelectedValue}
          type="tab"
          inputs={selectedValue === "admin" ? [password] : [email, password]}
          title="Conectează-te ca"
          onSubmit={onSubmit}
          button={button}
        />
      </div>
    </>
  );
};

export default Login;
