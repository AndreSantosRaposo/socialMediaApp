export function Post(){
    return(
        <section className="post">
            <span className="post__header">
                <div className="post__header__userInfo">
                    <img src="/imgs/profile-picture.png"/>
                    <h2>NomeUtilizador</h2>
                </div>
                <p>Posted 1 hour ago</p>
            </span>
            <span className="post__content">
                <p>Poema é um gênero textual dividido em estrofes e versos. Cada estrofe é constituída por versos. Além dos versos, não obrigatoriamente, fazem parte da estrutura do poema as estrofes, a rima e a métrica. Conforme o tema, o assunto, o poema pode ser lírico, narrativo ou dramático, podendo ter subcategorias.</p>
                <picture className="post__content__picture">
                    <img src="/imgs/buttons/hearth-button.png"/>
                    <img src="/imgs/buttons/hearth-button.png" />
                </picture>
            </span>
            <span className="post__footer">
                <div className="post__footer__container">
                    <img src="/imgs/profile-picture.png"/>
                    <input placeholder="Write a comment..."/>
                </div>
                <button className="post__footer__button">Post comment</button>
            </span>
        </section>
    )
}