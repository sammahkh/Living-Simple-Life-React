import WidgetTitle from "../WidgetTitle"
import WidgetRecent from "./WidgetRecent"
import  "../SidebarWidget1/SidebarWidget1.css"
import "./SidebarWidget2.css"
const SidebarWidget2 = () => {
   
    return <div className="SidebarWidget2">
        <WidgetTitle/>
        {[1,2,3].map((item) => (
      <WidgetRecent />
      ))}  
    </div>
       
}
export default SidebarWidget2