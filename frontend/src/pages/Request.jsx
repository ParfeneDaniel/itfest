import Form from "../components/Form";
import Header from "../components/Header";
import "../styles/request-page.css";

const Request = () => {
  const inputs = [
    {
      type: "input",
      label: "Nume",
    },
    {
      type: "input",
      label: "Email",
      inputType: "email",
    },
    {
      type: "input",
      label: "Nume facultate",
    },
    {
      type: "textarea",
      label: "Detalli",
    },
  ],
  button = {
    acion: "",
    text: "Trimite cerere",
    type: "",
  };

  return (
    <div id="request-page">
      <Header />
      <Form title={"Trimite cerere"} inputs={inputs} onSubmit={() => console.log("submit")} button={button} />
    </div>
  );
};

export default Request;
