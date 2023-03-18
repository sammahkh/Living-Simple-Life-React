import WidgetImg from "../WidgetImg"
import WidgetTitle from "../WidgetTitle"
import WidgetBody from "./WidgetBody"
import  "./SidebarWidget1.css"
const SidebarWidget1 = () => {
   
    return <div className="SidebarWidget1">
        <WidgetTitle/>
        <WidgetImg/>
        <WidgetBody/>
    </div>
       
}
export default SidebarWidget1