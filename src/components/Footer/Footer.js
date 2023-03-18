import SubTitle from "../Header/HeaderLeft/SubTitle"
import "./Footer.css"
const Footer = () => {
    return (
        <div className="Footer">
          {[1,2].map((item) => (
      <SubTitle/>
      ))}  
        </div>
    )
}

export default Footer