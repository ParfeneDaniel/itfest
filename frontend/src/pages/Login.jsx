import { useState } from "react";
import Form from "../components/Form";
import Header from "../components/Header";

const Login = () => {
  const [selectedValue, setSelectedValue] = useState("student");

  const password = {
      type: "input",
      label: "Password",
      inputType: "password",
    },
    email = {
      type: "input",
      label: "Email",
      inputType: "email",
    },
    button = {
      text: "Conectează-te",
      type: "filledButton medium pointer",
      action: "",
    };

  return (
    <>
      <Header />
      <div id="dashboard">
        <Form
          selectedValue={selectedValue}
          setSelectedValue={setSelectedValue}
          type="tab"
          inputs={selectedValue === "admin" ? [password] : [email, password]}
          title="Conectează-te ca"
          onSubmit={() => console.log("Submit")}
          button={button}
        />
      </div>
    </>
  );
};

export default Login;
