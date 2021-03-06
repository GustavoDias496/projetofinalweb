import FormEntrada from '../Components/FormEntrada/FormEntrada';
import styles from './CadastroEntradas.module.css'
import Footer from '../Components/Footer/Footer'
import NavBar from '../Components/Navbar/Navbar'

function CadastroEntradas(){

    return(
        <div>
            <NavBar/>
            <div className={styles.title}>
                <h1>Cadastro de Entradas</h1>
            </div>
            
            <div className={styles.content}>
                <FormEntrada />
            </div>
            <Footer/>
        </div>
    )
}
 
export default CadastroEntradas;