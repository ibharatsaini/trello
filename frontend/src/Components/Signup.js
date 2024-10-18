import React, { useState } from "react";

function Signup() {
  const [signup, setSignup] = useState({
    email: "",
    password: "",
    firstName: "",
    lastName: "",
  });

  function handleSubmit(){
    console.log(signup)
    fetch(`/api/auth/sign-up`,{
        headers:{
            "Content-Type":"application/json"
        },
        method:"POST",
        body:JSON.stringify(signup)
    }).then((res)=>res.json())
    .then((data)=>console.log(data))
  }
  function handleSignupFormChange(name, value) {
    setSignup((val) => {
      return {
        ...val,
        [name]: value,
      };
    });
  }
  return (
    <div className="w-80 m-auto">
      <h2 className="text-2xl text-blue-600">Sign Up</h2>
      <div className="flex flex-col w-full">
        <div className="w-full h-full">
          <input
            value={signup.firstName}
            placeholder="First name"
            type="text"
            className="w-full h-8"
            name="firstName"
            onChange={(e)=>handleSignupFormChange(e.target.name,e.target.value)}
          />
          <input
            value={signup.lastName}
            placeholder="Last name"
            type="text"
            name="lastName"
            className="w-full h-8"
            onChange={(e)=>handleSignupFormChange(e.target.name,e.target.value)}
          />
          <input
            value={signup.email}
            placeholder="Email"
            type="text"
            name="email"
            className="w-full h-8"
            onChange={(e)=>handleSignupFormChange(e.target.name,e.target.value)}
          />
          <input
            value={signup.password}
            placeholder="Password"
            type="text"
            name="password"
            className="w-full h-8"
            onChange={(e)=>handleSignupFormChange(e.target.name,e.target.value)}
          />
        </div>
        <div className="w-full h-6 bg-blue-500" onClick={handleSubmit}>Signup</div>
        <div className="w-full flex" >
          <span>Already have an account?</span>
          <span>Log In</span>
        </div>
      </div>
    </div>
  );
}

export default Signup;
