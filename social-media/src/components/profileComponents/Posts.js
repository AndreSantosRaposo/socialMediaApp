import { Post } from "../otherComponents/Post"

export function Posts(){
    return(
        <section className="posts">
            <picture class="posts__img__container">
                <Post />
            </picture>
        </section>
    )
}