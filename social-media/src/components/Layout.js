import Header from './Header'
import HeaderMobile from './HeaderMobile'
import { Outlet } from 'react-router-dom'
import { useEffect,useState } from 'react';

export function Layout(){
    
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

  
    return(
        <div className='layout'>
            {screenWidth>600?<Header/>:<HeaderMobile/>}
            <Outlet context={[screenWidth]}/>
        </div>
    )
}