import { Link } from 'react-router-dom'
import styles from '../Navbar/Navbar.module.css'
 
import logo from '../../img/QGNavbar.png'
 
function NavBar(){  
    return(
        <nav className={styles.navbar}>
            <div>
            <Link to="/Home"><img  src={logo} alt="logo"/></Link>
            </div>
            <text className={styles.pageTitle}>QG Finanças</text>
            <ul className={styles.list}>
                <li className={styles.item}>
                    <Link to="/Home">Home</Link>
                </li>
                <li className={styles.item}>
                    <Link to="/historico">Histórico</Link>
                </li>
                <li className={styles.item}>
                    <Link to="/cadastroEntradas">Cadastro Entradas</Link>
                </li>
                <li className={styles.item}>
                    <Link to="/cadastroSaidas">Cadastro Saídas</Link>
                </li>
            </ul> 
        </nav>
    )
}

export default NavBar