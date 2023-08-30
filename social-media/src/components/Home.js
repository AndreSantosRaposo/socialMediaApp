import { Post } from "./otherComponents/Post"
import { CreatePost } from "./otherComponents/CreatePost"
import { UserNote } from "./otherComponents/UserNote";
import { useOutletContext } from "react-router-dom";

export function Home(){
    const screenWidth = useOutletContext()
    console.log(screenWidth)
    return(
        <div className="home">
            <main className="home__main">
                <CreatePost/>
                <Post />
                <Post />
            </main>
            {screenWidth>600?
            <aside className="home__aside">
                    <h1 className="aside__tittle">Notes</h1>
                    <section className="aside__notes__container">
                        <UserNote />
                        <UserNote />
                        <UserNote />
                    </section>
            </aside>
            :""}
        </div>
    )
}