import '../styles/button.css';

const Button = (props) => {
  return (
      <button
        className={props.type}
        action={props.action}
      >
        {props.text || <img src={props.image} />}
      </button>
  )
}

export default Button;