import './button.styles.scss';

const button_type = {
  google: 'google-sign-in',
  inverted: 'inverted',
};

const Button = ({ children, button, ...otherProps }) => {
  return (
    <button
      className={`button-container ${button_type[button]}`}
      {...otherProps}
    >
      {children}
    </button>
  );
};
export default Button;
