import SidebarWidget1 from "./SidebarWidget1/SidebarWidget1"
import SidebarWidget2 from "./SidebarWidget2/SidebarWidget2"
import "./Sidebar.css"
const Sidebar = () => {
   
    return <div className="Sidebar">
        <SidebarWidget1/>
        <SidebarWidget2/>
    </div>
}
export default Sidebar