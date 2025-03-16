import Button from "./Button";
import Input from "./Input";
import "../styles/form.css";
import { useState } from "react";

const Form = ({
  selectedValue,
  setSelectedValue,
  title,
  inputs,
  button,
  onSubmit,
  type,
}) => {
  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    const data = inputs.reduce((acc, input) => {
      const value = formData.get(input.name);

      let parsedValue;
      switch (input.types) {
        case "number":
          parsedValue = value ? Number(value) : 0;
          break;
        case "boolean":
          parsedValue = value === "on" || value === "true";
          break;
        default:
          parsedValue = value?.toString() || "";
      }

      return { ...acc, [input.name]: parsedValue };
    }, {});

    onSubmit(data);
  };

  return (
    <form onSubmit={handleSubmit} id="form">
      {type == "tab" && (
        <div className="choice-container">
          <div
            onClick={() => setSelectedValue("student")}
            className={
              "pointer choice " + (selectedValue == "student" ? "choice-selected" : "")
            }
          >
            Student
          </div>
          <div
            onClick={() => setSelectedValue("facultate")}
            className={
              "pointer choice " +
              (selectedValue == "facultate" ? "choice-selected" : "")
            }
          >
            Facultate
          </div>
          <div
            onClick={() => setSelectedValue("admin")}
            className={
              "pointer choice " + (selectedValue == "admin" ? "choice-selected" : "")
            }
          >
            Admin
          </div>
        </div>
      )}
      <h1 class="form-title">
        {type === "tab" ? title + " " + selectedValue : title}
      </h1>
      {inputs.map((input, index) => {
        return (
          <Input
            label={input.label}
            placeholder={input.placeholder}
            type={input.type}
            key={index}
          />
        );
      })}
      <Button type={button.type} action={button.action}>
        {button.text}
      </Button>
    </form>
  );
};

export default Form;
