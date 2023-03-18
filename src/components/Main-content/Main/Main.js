import Articlefeatured from "./Article-featured/Articlefeatured"
import ArticlesRecent from "./Articles-recent/ArticlesRecent"
import "./Main.css"
const Main = () => {
    return (<div className="main">
        <Articlefeatured/>
        <ArticlesRecent/>
    </div>)
}

export default Main