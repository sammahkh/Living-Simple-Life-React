import ArticleTitle from "../ArticleTitle"
import ArticleBody from "./ArticleBody"
import Articlereadmore from "../Articlereadmore"
import "./RecentMain.css"
const RecentMain = () => {
    return <div className="RecentMain">
        <ArticleTitle/>
        <ArticleBody/>
       <Articlereadmore/>
    </div>
}

export default RecentMain