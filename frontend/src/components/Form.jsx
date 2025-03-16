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

    const formData = new FormData(e.target);

    const data = Object.fromEntries(formData.entries());
    {
      type === "tab" && (data["type"] = selectedValue);
    }
    onSubmit(data);
  };

  return (
    <form onSubmit={handleSubmit} id="form">
      {type == "tab" && (
        <div className="choice-container">
          <div
            onClick={() => setSelectedValue("student")}
            className={
              "pointer choice " +
              (selectedValue == "student" ? "choice-selected" : "")
            }
          >
            Student
          </div>
          <div
            onClick={() => setSelectedValue("headmaster")}
            className={
              "pointer choice " +
              (selectedValue == "headmaster" ? "choice-selected" : "")
            }
          >
            Facultate
          </div>
          <div
            onClick={() => setSelectedValue("admin")}
            className={
              "pointer choice " +
              (selectedValue == "admin" ? "choice-selected" : "")
            }
          >
            Admin
          </div>
        </div>
      )}
      <h1 className="form-title">
        {type === "tab" ? title + " " + selectedValue : title}
      </h1>
      {inputs.map((input, index) => {
        return (
          <Input
            label={input.label}
            placeholder={input.placeholder}
            name={input.name}
            type={input.type}
            inputType={input.inputType}
            key={index}
          />
        );
      })}
      <Button type={button.type}>{button.text}</Button>
    </form>
  );
};

export default Form;
