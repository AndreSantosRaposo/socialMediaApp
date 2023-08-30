export function CreatePost(){
    return(
        <section className="createPost">
            <span className="createPost__header">
                <div className="createPost__header__userInfo">
                    <img src="/imgs/profile-picture.png"/>
                    <h2>NomeUtilizador</h2>
                </div>
            </span>
            <span className="createPost__content">
                <textarea placeholder="What's on your mind, name?" />
                <picture className="createPost__content__picture">
                    <img src="/imgs/buttons/addImage-button.png"/>
                </picture>
            </span>
            <span className="createPost__footer">
                <button className="createPost__footer__button">Post</button>
            </span>
        </section>
    )
}