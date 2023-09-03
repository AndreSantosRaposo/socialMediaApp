import Header from './Header'
import HeaderMobile from './HeaderMobile'
import { Outlet } from 'react-router-dom'
import { useEffect,useState } from 'react';
import { getDocs,collection } from 'firebase/firestore';
import {db, auth} from '../firebase/config'
import { onAuthStateChanged } from 'firebase/auth';


export function Layout(){
    
  /* Change header from desktop to mobile */

  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useEffect(() => {
    function handleResize() {
      setScreenWidth(window.innerWidth);
    }

    // Add an event listener for the 'resize' event
    window.addEventListener("resize", handleResize);

    // Cleanup the event listener on unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []); // Empty dependency array to ensure the effect runs only once on mount

  const [users, setUsers] = useState([])
  const usersCollectionRef = collection(db, "users")
  const [activeUser, setActiveUser] = useState({})
  
  async function getUsersList(){
    try{
      const data = await getDocs(usersCollectionRef)
      const filteredData = await data.docs.map((doc)=>({...doc.data()}))
      await setUsers(filteredData)
    }catch(err){
      console.log(err)
    }
  }
  onAuthStateChanged(auth, (user) => {
    if (user) {
      const info = users.map(us=>{
        if(us.uid==user.uid){
          setActiveUser(us)
          console.log("sucess")
        }
      })
    } else {
      console.log('No user is signed in.');
    }
  });

  useEffect(()=>{
    getUsersList()
  },[auth])

  

  return(
      <div className='layout'>
          {screenWidth>600?<Header/>:<HeaderMobile/>}
          <Outlet context={[screenWidth,activeUser]}/>
      </div>
  )
}