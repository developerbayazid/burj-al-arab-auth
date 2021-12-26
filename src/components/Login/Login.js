import GoogleIcon from '@mui/icons-material/Google';
import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { userContext } from '../../App';
import firebaseConfig from './firebase.config';

initializeApp(firebaseConfig); 

const Login = () => {
    const [loggedInUser, setLoggedInUser] = useContext(userContext);
    const navigate = useNavigate();

    const handleGoogleSignIn = () => {
        const auth = getAuth();
        const google = new GoogleAuthProvider();
        signInWithPopup(auth, google)
        .then( async (res) => {
            const {displayName, email} = await res.user;
            const newLoggedInUser = {name: displayName, email: email};
            setLoggedInUser(newLoggedInUser);
            navigate(-1)
        })
        .catch( async (error) => {
            const errorMessage = await error.message;
            console.log(errorMessage);
        });
    }
    return (
        <div style={{marginTop: '60px'}}>
            <h3>Sign With Google</h3>
            <button onClick={handleGoogleSignIn}><GoogleIcon color="primary" /></button>
        </div>
    );
};

export default Login;