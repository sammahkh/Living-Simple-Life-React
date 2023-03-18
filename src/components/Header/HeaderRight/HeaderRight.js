import NavItem from "./NavItem"

import "./HeaderRight.css"
const items=[1,2,3]
const HeaderRight = () => {
   
    return <div className="Navbar">
        <ul >
      {items.map((item) => (
      <NavItem />
      ))}  
      </ul>
    </div>
}
export default HeaderRight