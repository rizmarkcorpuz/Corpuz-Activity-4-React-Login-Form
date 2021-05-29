import React, { useState } from 'react';
import LoginForm from './components/LoginForm';

function App() {
  const loginUser = {
    name: "Riz Mark Corpuz",
    email: "rizmarkcorpuz@gmail.com",
    password: "rizmarkcorpuz"

  }

  const [user, setUser] = useState({name: "", email: ""});
  const [error, setError] = useState("");

  const Login = details => {
    console.log(details);

    if(details.name == loginUser.name && details.email == loginUser.email && details.password == loginUser.password){
      console.log("Logged in succesfully");
      setUser({
        name: details.name,
        email: details.email
      });
    }
    else{
      console.log("The name, email, or password are incorrect. Please Try Again!");
      setError("The name, email, or password are incorrect. Please Try Again!");
    }
  }

  const Logout = () => {
    setUser({name: "", email: ""});
  }

  return (
    <div className="LoginForm">
       {(user.email != "") ? (
        <form>
        <div className="greetings">
          <h2>Greetings, <span>{user.name}</span></h2>
          <button className="button1" onClick={Logout}>Logout</button>
        </div>
      </form>
      ) : ( 
        <LoginForm Login={Login} error={error}/>
      )} 
    </div>
  );
}

export default App;
