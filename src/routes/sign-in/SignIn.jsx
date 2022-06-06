import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
} from '../../utils/firebase/firebase';

import SignUp from '../sign-up/SignUp';

const SignIn = () => {
  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    const userDocRef = await createUserDocumentFromAuth(user);
  };

  return (
    <div>
      <h1>Sign In</h1>{' '}
      <button onClick={logGoogleUser}>signin with google</button>
      <SignUp />
    </div>
  );
};
export default SignIn;
