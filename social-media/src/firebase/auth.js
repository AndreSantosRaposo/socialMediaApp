import { auth, /* googleProvider*/ } from "./config";
import { createUserWithEmailAndPassword, /*signInWithPopup*/ } from "firebase/auth";
import { useState } from "react";

import { db } from "./config";
import { collection, addDoc, getDocs } from "firebase/firestore";

export const Auth = () => {
  const [info, setInfo] = useState({
    email: "",
    firstName:"",
    lastName:"",
    userName:"",
    dob:"",
    password:""
  })

  const usersCollectionRef = collection(db, "users")

  const [authMode, setAuthMode] = useState("login");

  // Possible signUp errors
  const [passwordError, setPasswordError] = useState(false);
  const [ageError, setAgeError] = useState(false);
  const [emailConflict, setEmailConflict] = useState(false);
  const [userNameConflict, setUserNameConflict] = useState(false);

  // Mudar de sign UP para login com o butão
  function changeAuth(){
    setAuthMode(prevMode => (prevMode === "signIn" ? "login" : "signIn"));
  }

  // Mudar o state quando estou a fazer sign in
  function handleChange(event){
    const {name, value} = event.target
    setInfo(prev=>{
      return{
        ...prev,
        [name]:value
      }
    })
  }

  //Verificar se email é repetido

  // Fazer sign up
  async function signIn() {
    const dob = new Date(info.dob);
    const currentDate = new Date();
    const age = currentDate.getFullYear() - dob.getFullYear();
  
    if (age >= 18 && age <= 150) {
      setAgeError(false)
      if (info.password.length >= 6) {
        try {
          setPasswordError(false)
          const { user } = await createUserWithEmailAndPassword(auth, info.email, info.password);
          await uploadUser(user.uid);
          // Rest of your code
        } catch (err) {
          console.log(err);
        }
      } else {
        setPasswordError(true);
      }
    } else {
      setAgeError(true);
    }
  }

  // Upload a info do user quando dá signUp
  async function uploadUser(uid) {
    try {
      await addDoc(usersCollectionRef, {
        uid:uid,
        firstName: info.firstName,
        lastName: info.lastName,
        userName: info.userName,
        dob: info.dob,
        email: info.email
      });
    } catch (err) {
      console.log(err);
    }
  }

  //Fazer as duas funções a cima
  async function handleSignUp(e) {
    e.preventDefault();
    
    if(ageError||passwordError){
      return;
    }


    //Verify if email is repeated
    const querySnapshot = await getDocs(collection(db, "users"));
    const existingEmail = querySnapshot.docs.some((doc) => doc.data().email === info.email);

    if (existingEmail) {
      setEmailConflict(true);
      setInfo(prev=>({...prev, email:""}))
      document.getElementById("email").value = "";
      return; // Prevenir ulpadUser e signIn caso exista conflite de emails
    }else{
      setEmailConflict(false)
    }
  
    //Verify if userName is repeated
    const existingUserName = querySnapshot.docs.some((doc) => doc.data().userName === info.userName)

    if (existingUserName) {
      setUserNameConflict(true);
      setInfo(prev=>({...prev, userName:""}))
      document.getElementById("username").value = "";
      return; // Prevenir ulpadUser e signIn caso exista conflite de emails
    }else{
      setUserNameConflict(false)
    }


    
    signIn(); // Now sign in
    // aquiiiiiii               await uploadUser();
  
    // Reset o state de info
    setInfo({
      email: "",
      firstName: "",
      lastName: "",
      userName: "",
      dob: "",
      password: ""
    });
  
    // Resetar os campos
    document.getElementById("first-name").value = "";
    document.getElementById("last-name").value = "";
    document.getElementById("username").value = "";
    document.getElementById("dob").value = "";
    document.getElementById("email").value = "";
    document.getElementById("password").value = "";

    // Resetar mensagens de erro
    setPasswordError(false);
    setAgeError(false);
  }

  


  // Usar o google
  /* async function signInWithGoogle(){
    try{
      await signInWithPopup(auth,googleProvider) 
    }catch(err){
      console.log(err)
    }
  }
  */

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
            {userNameConflict && <p className="error">Username already exists. Please use a different Username.</p>}

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
            <input onChange={handleChange} type="email" id="email" name="email" required/>
            {emailConflict && <p className="error">Email already exists. Please use a different email.</p>}

            <label for="password">Password</label>
            <input onChange={handleChange} onBlur={() => {setPasswordError(info.password.length < 6);}} type="password" id="password" name="password" required />
            {passwordError && <p className="error">Password must be at least 6 characters</p>}

            <button type="submit" onClick={handleSignUp}>Sign Up</button>
            <p>Click here to: <a onClick={changeAuth} className="change__button">Login</a></p>
          </form>
          {
            /*
            <div className="signIn__with__google">
              <h2>Sing Up Google</h2>
              <button className="signIn__google" onClick={signInWithGoogle}><img className="signIn__google__img" src="/imgs/google-icon.png"></img></button>
            </div>
            */
          }
        </div>
        
        <div className={`login__container__login ${authMode === "login" ? "active" : ""}`}>

          <h2>Login</h2>
          <form action="#">
            <label for="email">Email</label>
            <input type="email" id="email" name="email" required />

            <label for="password">Password</label>
            <input type="password" id="password" name="password" required />

            <button type="submit" onClick={signIn}>Login</button>
            <p>Click here to: <a onClick={changeAuth} className="change__button">Sign-Up</a></p>
          </form>
          {
            /*
            <div className="signIn__with__google">
            <h2>Login Google</h2>
            <button className="signIn__google" onClick={signInWithGoogle}><img className="signIn__google__img" src="/imgs/google-icon.png"></img></button>
            </div>
            */
          }
        </div>
        
      </div>
    </section>
  );
};