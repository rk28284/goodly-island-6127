import { createContext, useState } from "react";

export const AuthContext=createContext()
function AuthContextProvider({children}) {
const [state,setState]=useState({
    isAuth:false,
    token:null
})
const loginUser=(token)=>{
    setState({
        isAuth:true,
        token
    })
}
const logoutUser=()=>{
    setState({
        isAuth:false,
        token:""
    })
}
return(
    <AuthContext.Provider value={{authState:state,loginUser,logoutUser}}>
        {children}
    </AuthContext.Provider>
)
}

export default AuthContextProvider;
