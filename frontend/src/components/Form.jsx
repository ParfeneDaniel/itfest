import Button from "./Button";
import Input from "./Input";
import "../styles/form.css";

const Form = ({ title, inputs, button, onSubmit }) => {
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
      <h1 class="form-title">{title}</h1>
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
      <Button text={button.text} type={button.type} action={button.action} />
    </form>
  );
};

export default Form;
