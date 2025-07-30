import { useContext } from "react"
import { AuthContext } from "../providers/AuthProvider"

const useAuth =()=>{
    const info = useContext(AuthContext);
    return info;
}
export default useAuth;