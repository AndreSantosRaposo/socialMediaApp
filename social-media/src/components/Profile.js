import { NavLink, Outlet } from "react-router-dom"

export function Profile(){
    
    const activeStyle = {
        borderBottom: "2px solid #E5B906"
    }

    return(
        <main className="profile">
            <section className="profile__info">
                <img src="/imgs/profile-picture.png"/>
                <ul className="profile__info__list">
                    <li><h1>UserName</h1></li>
                    <li>username@gmail.com</li>
                    <li>Joined at 10/10/2010</li>
                </ul>
                <button><img src="/imgs/buttons/edit-button.png" /></button>
            </section>
            <section className="profile__nav">
                <ul className="profile__nav__links">      
                    <NavLink
                    end
                        to=""
                        style={({isActive}) => isActive ? activeStyle : null }
                        className="header__nav__link"
                    >Posts
                    </NavLink>
                    <NavLink
                        to="following"
                        style={({isActive}) => isActive ? activeStyle : null }
                        className="header__nav__link"
                    >Following
                    </NavLink>
                    <NavLink
                        to="followers"
                        style={({isActive}) => isActive ? activeStyle : null }
                        className="header__nav__link"
                    >Followers
                    </NavLink>
                </ul>
            </section>
            <Outlet/>
        </main>
    )
}