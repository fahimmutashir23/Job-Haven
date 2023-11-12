
import auth from "../firebase/firebase.config";
import { signOut } from "firebase/auth";


const useAuth = () => {
    const logout = () =>{
        return signOut(auth);
    }
    return {logout}
};

export default useAuth;