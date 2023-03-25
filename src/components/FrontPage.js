import stars from "../assets/img/frontpagestars.jpg";
import trees from "../assets/img/treesedit.png"

export const FrontPage = () => {
        return (
                <body>
                        <section className="frontpg" id="home">
                                <img src={ stars } id="stars"></img>
                                <h1 id="headline">discover</h1>
                                <img src = { trees } id="trees"></img>
                        </section>
                </body>
        )
}