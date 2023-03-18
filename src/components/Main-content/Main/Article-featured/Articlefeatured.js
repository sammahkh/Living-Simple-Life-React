import ArticleTitle from "../ArticleTitle"
import ArticleImg from "./ArticleImg"
import Articleinfo from"../Articleinfo"
import ArticleBody from "./ArticleBody"
import Articlereadmore from "../Articlereadmore"
import "./Article-featured.css"
const Articlefeatured = () => {
    return (<article className="feauterd">

        <ArticleImg/>
        <Articleinfo/>
        <ArticleTitle/>
        <ArticleBody/>
       <Articlereadmore/>
    </article>)
}

export default Articlefeatured