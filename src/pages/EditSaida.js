import FormSaidaEdit from '../Components/FormSaidaEdit/FormSaidaEdit';
import styles from './CadastroEntradas.module.css'
import Footer from '../Components/Footer/Footer'
import NavBar from '../Components/Navbar/Navbar'

function EditSaida(){

    return(
        <div>
            <NavBar/>
                <div className={styles.title}>
                    <h1>Editar Saida</h1>
                </div>
                
                <div className={styles.content}>
                    <FormSaidaEdit />
                </div>
            <Footer/>
        </div>
    )
}
 
export default EditSaida;