import FormSaida from '../Components/FormSaida/FormSaida';
import styles from './CadastroSaidas.module.css'
import Footer from '../Components/Footer/Footer'
import NavBar from '../Components/Navbar/Navbar'

function CadastroSaidas(){
    return(
        <div>
            <NavBar/>
            <div className={styles.title}>
                <h1>Cadastro de Saídas</h1>
            </div>
        
            <div className={styles.content}>
                <FormSaida />
            </div>
            <Footer/>
        </div>
    )
}

export default CadastroSaidas