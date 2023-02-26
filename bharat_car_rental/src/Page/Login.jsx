import { useContext, useState } from "react";
import { Link,useNavigate } from "react-router-dom";
import {AuthContext} from "../Context/AuthContextProvider"
function Login() {
  const [email,setEmail]=useState("eve.holt@reqres.in")
  const [password,setPassword]=useState("cityslicka")
  const {loginUser,authState}=useContext(AuthContext)
  const [isloading,setIsLoading]=useState(false)
  const navigate=useNavigate()
 
 const handleSubmit=(e)=>{
   e.preventDefault()
 setIsLoading(true)
 fetch('https://reqres.in/api/login', {
   method: 'POST', // or 'PUT'
   headers: {
     'Content-Type': 'application/json',
   },
   body: JSON.stringify({email,password}),
 }).then((res)=>res.json()).then((res)=>{
   if(res.token){
     loginUser(res.token)
     navigate("/dashboard")
   }
   console.log(res.token)
 }).catch((err)=>{
   console.log(err)
 })
 }
   return (
     <div>
       <form data-testid="login-form" onSubmit={handleSubmit}>
         <div>
           <label>
             Email
             <input data-testid="email-input" type="email" placeholder="email"
             value={email} onChange={(e)=>setEmail(e.target.value)} />
           </label>
         </div>
         <div>
           <label>
             Password
             <input
               data-testid="password-input"
               type="password"
               placeholder="password"
               value={password} onChange={(e)=>setPassword(e.target.value)}
             />
           </label>
         </div>
         <div>
           <input data-testid="form-submit" type="submit" value="SUBMIT" />
         </div>
       </form>
       <div>
         <Link to="/">Go Back</Link>
       </div>
     </div>
   );
 }
 export default Login;
 