import '../css/Navbar.css'
import CarWidget from './Carwidget'


const Navbar = () => {
    return ( 
        <nav style={{backgroundColor: 'yellow', color: 'black', padding: '10px', display: 'flex', justifyContent:"space-around", alignItems:"center", textDecoration:"none"}}>
            <a className="nav-link" href="">
                <img src="../modomaderalogo.png" alt="logo de la empresan" className="logo" />
            </a>
            <a className="nav-link" href="">Nuevos</a>
            <a className="nav-link" href="">Más vendidos</a>
            <a className="nav-link" href="">Ofertas</a>
            <CarWidget className="carWidget"/>
            </nav>
    ) ;

}

export default Navbar;

