import { NavLink } from "react-router-dom"
import "./NavBar.css"

function NavBar ({props}){
   
    return (
        <nav className="NavBar">
         {props.map(el=>(
            <NavLink className="NavLink"exact to={`${el.name}`} key={`N${el.id}`}>
                <img src={el.src}></img>
                {el.name}
            </NavLink>
         ))}
    </nav>
    )
}

export default NavBar