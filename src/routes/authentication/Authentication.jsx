import SignUp from "../../components/sign-up-form/Sign-up-form";
import SignIn from "../../components/sign-in-form/Sign-in-form";
import "./authentication.styles.scss";

const Authentication = () => {
  return (
    <div className="authentication-container">
      <SignIn />
      <SignUp />
    </div>
  );
};
export default Authentication;
