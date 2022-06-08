import React, { useState } from "react";
import LoginForm from "./LoginForm";
import Checkout from './Checkout';




function LoginData() {
   
    const adminUser ={
        email: "shay@email.com",
        password: "112233"
      }

      const [user, setUser] = useState({name:"", email:""});
      const [error, setError] = useState("");


      const Login = details => {
        console.log(details);
      

        if (details.email == adminUser.email && details.password == adminUser.password){
        console.log("Logged in");
        setUser({
            name: details.name,
            email: details.email
        });
    } else {
        console.log("Details do not match!");
        setError("Details do not match!");
        }


      }
        

      const Logout = () => {
          setUser({name:"", email:""});
      }

    

  return (
    <div className="Login">
      
        {(user.email != "" ) ? (
            <div className="welcome">
                {/* <h2> Welcome, <span>{user.name}</span></h2>
                <button onClick={Logout}> Logout</button> */}
                <a className="nav-link active" aria-current="page">
                <h2> Welcome,<span>{user.name}</span> to Decoria Home Decor</h2>     
                <button onClick={Logout}> Logout</button>
                <button className="btn btn m-2"><Checkout /></button>

           
                </a>

            </div>
        ):(
            <LoginForm Login={Login} error={error} />
        

        )}
    </div>

  )
}

export default LoginData;