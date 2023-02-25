import { NavLink } from "react-router-dom";

const links=[
    { path:"/",title:"Select City"},
    { path:"/pune",title:"About"},
    { path:"/becomehost",title:"Contact"},
    {   path:"/login",title:"Login/Signup"},
]


function Navbar(){
const activeLinkStyle={textDecoration:"none",color:"red"};
const defaultLinkStyle={textDecoration:"none",color:"teal"};
return (
    <div style={{display:"flex",alignItems:"center",
    justifyContent:"space-around", 
    borderBottom: "solid 1px",
     paddingBottom: "1rem"}}>
        {links.map(({path,title})=>(
            // <Link key={path} to={path}>
            // {title}
            // </Link>
            <NavLink style={({isActive})=>{
                return isActive?activeLinkStyle:defaultLinkStyle
            }} key={path} to={path}>
                 {title}
            </NavLink>
        ))}
     {/* <Link to="/" state={{textDecoration:"none"}}>Home</Link>
     <Link to="/about">About</Link>
     <Link to="/contact">Contact</Link>
     <Link to="/user">User</Link>
     <Link to="/login">Login</Link> */}
    </div>
)
}
export default Navbar