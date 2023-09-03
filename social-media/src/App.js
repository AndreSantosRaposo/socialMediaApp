import logo from './logo.svg';
import './App.scss';
import { Home } from './components/Home';
import { Profile } from './components/Profile';
import {Posts} from './components/profileComponents/Posts.js'
import {Follow} from './components/profileComponents/Follow.js'
import { Notes } from './components/Notes';
import { Search } from './components/Search';
import { Auth } from './firebase/auth'
import {Route, Outlet, RouterProvider, createBrowserRouter, createRoutesFromElements} from 'react-router-dom'
import { Layout } from './components/Layout';
import { Settings } from './components/Settings';

const router = createBrowserRouter(createRoutesFromElements(
  <>
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      <Route path="profile" element={<Profile />}>
        <Route index element={<Posts/>}/>
        <Route path='followers' element={<Follow/>}/>
        <Route path='following' element={<Follow/>}/>
      </Route>
      <Route path="notes" element={<Notes/>} />
      <Route path="search" element={<Search/>} />
      <Route path="settings" element={<Settings/>} />
      <Route path="login" element={< Auth />} />
    </Route>
    
  </>
  
))

function App() {
  return (
    <RouterProvider router={router}/>
  );
}

export default App;
