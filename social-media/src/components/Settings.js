import {signOut} from "firebase/auth";
import { auth } from "../firebase/config";

export function Settings(){
    async function logOut(){
        try{
            await signOut(auth)
        }catch(err){
            console.log(err)
        }
    }

    return(
        <main>
            <button className="settings__buttons" onClick={logOut}>Log Out</button>
        </main>
    )
}