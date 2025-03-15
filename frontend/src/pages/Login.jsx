import Form from "../components/Form";
import Header from "../components/Header";

const Login = () => {
  const inputs = [
      {
        type: "input",
        label: "Email",
        inputType: "email",
      },
      {
        type: "input",
        label: "Password",
        inputType: "password",
      },
    ],
    button = {
      text: "Conectează-te",
      type: "filledButton",
      action: "",
    };

  return (
    <>
      <Header />
      <div id="dashboard">
        <Form
          type="tab"
          inputs={inputs}
          title="Conectează-te ca"
          onSubmit={() => console.log("Submit")}
          button={button}
        />
      </div>
    </>
  );
};

export default Login;
