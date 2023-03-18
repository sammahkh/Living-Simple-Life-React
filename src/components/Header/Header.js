import HeaderRight from "./HeaderRight/HeaderRight"
import HeaderLeft from "./HeaderLeft/HeaderLeft"
import "./styles.css" 
const Header = () => {
   
    return <div className="Header">
        <HeaderLeft/>
        <HeaderRight/>
    </div>
}
export default Header