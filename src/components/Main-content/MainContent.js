import Main  from"./Main/Main"
import Sidebar  from"./Sidebar/Sidebar"
import "./MainContent.css"
const MainContent = () => {
    return <div className="container">
        <Main/>
        <Sidebar/>
    </div>
}

export default MainContent