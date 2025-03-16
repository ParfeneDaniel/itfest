import axios from "../../api/axios";
import Form from "../components/Form";
import Header from "../components/Header";
import "../styles/request-page.css";

const Request = () => {
  const onSubmit = (data) => {
    console.log(data);
    axios
      .post("admin/request", {
        email: data.email,
        headmasterName: data.headmasterName,
        universityName: data.universityName,
        description: data.description,
      })
      .then((response) => {
        console.log(response);
      })
      .catch((e) => console.log(e));
  };

  const inputs = [
      {
        type: "input",
        label: "Nume",
        name: "headmasterName",
      },
      {
        type: "input",
        label: "Email",
        inputType: "email",
        name: "email",
      },
      {
        type: "input",
        label: "Nume facultate",
        name: "universityName",
      },
      {
        type: "textarea",
        label: "Detalii",
        name: "description",
      },
    ],
    button = {
      text: "Trimite cerere",
      type: "filledButton medium",
    };

  return (
    <div id="request-page">
      <Header />
      <div id="dashboard" className="posts">
        <Form
          title={"Trimite cerere"}
          inputs={inputs}
          onSubmit={onSubmit}
          button={button}
        />
      </div>
    </div>
  );
};

export default Request;
