import { auth, googleProvider } from "./config";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";

export const Auth = () => {
  const [info, setInfo] = useState({
    email: "",
    password:"",
    firstName:"",
    lastName:"",
    userName:"",
    dob:""
  })

  const [authMode, setAuthMode] = useState("signIn");

  const [passwordError, setPasswordError] = useState(false);
  const [ageError, setAgeError] = useState(false);


  function changeAuth(){
    setAuthMode(prevMode => (prevMode === "signIn" ? "login" : "signIn"));
  }

  function handleChange(event){
    const {name, value} = event.target
    setInfo(prev=>{
      console.log(info)
      return{
        ...prev,
        [name]:value
      }
    })
  }

  async function signIn() {
    const dob = new Date(info.dob);
    const currentDate = new Date();
    const age = currentDate.getFullYear() - dob.getFullYear();

    if (age >= 18 && age <= 150) {
      if (info.password.length >= 6) {
        try {
            const { user } = await createUserWithEmailAndPassword(auth, info.email, info.password);
            // Rest of your code
        }catch (err) {
            console.log(err);
        }
      } else {
            setPasswordError(true);
        }
    } else {
          setAgeError(true);
      }
    }


  async function signInWithGoogle(){
    try{
      await googleProvider(auth, googleProvider) 
    }catch(err){
      console.log(err)
    }
  }

  return (
    <section className="signIn">
      <div className="signIn__container">
      <div className={`signIn__container__signIn ${authMode === "signIn" ? "active" : ""}`}>
          <h2>Sign In</h2>
          <form action="#">
            <label for="first-name">First Name</label>
            <input onChange={handleChange} type="text" id="first-name" name="firstName" required />

            <label for="last-name">Last Name</label>
            <input onChange={handleChange} type="text" id="last-name" name="lastName" required />

            <label for="username">Username</label>
            <input onChange={handleChange} type="text" id="username" name="userName" required />

            <label for="dob">Date of Birth</label>
            <input onChange={handleChange}
              onBlur={() => {
                  const dob = new Date(info.dob);
                  const currentDate = new Date();
                  const age = currentDate.getFullYear() - dob.getFullYear();
          
                  if (age < 18 || age > 100) {
                      setAgeError(true);
                  } else {
                      setAgeError(false);
                  }
                }
              }
            type="date"
            id="dob"
            name="dob"
            required />
            {ageError && <p className="error">Please enter a valid age above 18 years</p>}
            
            <label for="email">Email</label>
            <input onChange={handleChange} type="email" id="email" name="email" required />

            <label for="password">Password</label>
            <input onChange={handleChange} onBlur={() => {setPasswordError(info.password.length < 6);}} type="password" id="password" name="password" required />
            {passwordError && <p className="error">Password must be at least 6 characters</p>}

            <button type="submit" onClick={signIn}>Sign In</button>
            <p>Click here to: <a onClick={changeAuth} className="change__button">Login</a></p>
          </form>
          <div className="signIn__with__google">
            <h2>Sing-In Google</h2>
            <button className="signIn__google" onClick={signInWithGoogle}><img className="signIn__google__img" src="/imgs/google-icon.png"></img></button>
          </div>
        </div>
        
        <div className={`login__container__login ${authMode === "login" ? "active" : ""}`}>

          <h2>Login</h2>
          <form action="#">
            <label for="email">Email</label>
            <input type="email" id="email" name="email" required />

            <label for="password">Password</label>
            <input type="password" id="password" name="password" required />

            <button type="submit" onClick={signIn}>Login</button>
            <p>Click here to: <a onClick={changeAuth} className="change__button">Sign-In</a></p>
          </form>
          <div className="signIn__with__google">
            <h2>Login Google</h2>
            <button className="signIn__google" onClick={signInWithGoogle}><img className="signIn__google__img" src="/imgs/google-icon.png"></img></button>
          </div>
        </div>
        
      </div>
    </section>
  );
};