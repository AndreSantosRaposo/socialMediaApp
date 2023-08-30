import {ProfileSearch} from "./otherComponents/ProfileSearch"
import {Post} from "./otherComponents/Post"

export function Search(){
    return(
        <main className="search">
            <section className="search__section">
                <section className="search__bar">
                    <input className="search__bar__input"></input>
                    <button className="search__bar__button">&#128269;</button>
                </section>
                <ProfileSearch />
            </section>
            <hr/>
            <section className="search__discovery">
                <Post />
                <Post />
                <Post />
            </section>
        </main>
    )
}