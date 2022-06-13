import "./button.styles.scss";

const button_type = {
  google: "google-sign-in",
  inverted: "inverted",
};

const Button = ({ children, buttonType, ...otherProps }) => {
  return (
    <button
      className={`button-container ${button_type[buttonType]}`}
      {...otherProps}
    >
      {children}
    </button>
  );
};
export default Button;
