import { NavLink } from "react-router-dom"

export default function Header(){
    const activeStyle = {
        backgroundColor:"#E5B906"
    }
    return(
        <header className="header">
           <span>
            <div className="header__logo">
                    <img className="header__logo__img" src="/imgs/logo.png"/>
                    <h1 className="header__logo__name">Logo</h1>
                </div>
                <nav className="header__nav">
                    <ul>
                        <NavLink
                            to="/"
                            style={({isActive}) => isActive ? activeStyle : null }
                            className="header__nav__link"
                        >Home
                        </NavLink>
                        <NavLink
                            to="profile"
                            style={({isActive}) => isActive ? activeStyle : null }
                            className="header__nav__link"
                        >Profile
                        </NavLink>
                        <NavLink
                            to="contacts"
                            style={({isActive}) => isActive ? activeStyle : null }
                            className="header__nav__link"
                        >Contacts
                        </NavLink>
                        <NavLink
                            to="notes"
                            style={({isActive}) => isActive ? activeStyle : null }
                            className="header__nav__link"
                        >Notes
                        </NavLink>
                        <NavLink
                            to="search"
                            style={({isActive}) => isActive ? activeStyle : null }
                            className="header__nav__link"
                        >Search
                        </NavLink>
                        <NavLink
                            to="settings"
                            style={({isActive}) => isActive ? activeStyle : null }
                            className="header__nav__link"
                        >Settings
                        </NavLink>
                    </ul>
                </nav>
           </span>
        </header>
    )
}