import '../css/Navbar.css'


const Navbar = () => {
    return ( 
        <nav style={{backgroundColor: 'yellow', color: 'white', padding: '10px', display: 'flex', justifyContent:"space-around", alignItems:"center", textDecoration:"none"}}>
            <a className="nav-link" href="">
                <img src="../modomaderalogo.png" alt="logo de la empresan" className="logo" />
            </a>
            <a className="nav-link" href="">Nuevos</a>
            <a className="nav-link" href="">Mas vendidos</a>
            <a className="nav-link" href="">Ofertas</a>
        </nav>
    ) ;

}

export default Navbar;

