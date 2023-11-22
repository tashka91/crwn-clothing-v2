import {Fragment} from 'react';
import {signInWithGooglePopup, createUserDocumentFromAuth} from '../../utils/firebase/firebase.utils'


const SignIn = () => {
    const logGoogleUser = async () => {
        const response = await signInWithGooglePopup();
        const userDocRef = await createUserDocumentFromAuth(response.user);
    }
 return(
    <Fragment>
        <div>Sign In</div>
        <button onClick={logGoogleUser}>Login with Google</button>
    </Fragment>
 );
}
export default SignIn;