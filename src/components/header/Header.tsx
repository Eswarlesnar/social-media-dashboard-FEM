
import "./header.css"

interface Props {
  handleDarkModeToggle : () => void , 
  darkMode : boolean
}
const Header : React.FC<Props> = ({handleDarkModeToggle , darkMode}) => {
  
    const labelClassname = darkMode ? "label-dark" : "label-light"
    return <div className="navbar">
        <div className="navbar-left">
           <h2 className="header">Social Media Dashboard</h2>
           <p className="followers-count">Total Followers: 0</p>
        </div>
        <div className="navbar-right">
           <p>Dark Mode</p>
           <input id ="dark-mode" type ="checkbox" onChange = {() => handleDarkModeToggle()} />
           <label className ={labelClassname} htmlFor="dark-mode"/>
        </div>
    </div>
}
export default Header