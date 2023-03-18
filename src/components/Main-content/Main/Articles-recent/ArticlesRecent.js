import ArticleRecent from "./ArticleRecent"

const ArticlesRecent = () => {

    return <div className="ArticlesRecent">
        {[1,2,3].map((item) => (
      <ArticleRecent />
      )) }
    </div>
}

export default ArticlesRecent