import CartWidget from "../CartWidget/CartWidget"
import './Navbar.css';

export default function NavBar (){
    return(
        <nav>
            <ul className="List">
                <li>
                    <a href="#">Inicio</a>
                </li>
                <li>
                    <a href="#">Zapatos</a>
                </li>
                <li>
                    <a href="#">Nosotros</a>
                </li>
                <CartWidget/>
            </ul>
            
        </nav>
    )
}