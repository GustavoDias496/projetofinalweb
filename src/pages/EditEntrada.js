import FormEntradaEdit from '../Components/FormEntradaEdit/FormEntradaEdit';
import styles from './CadastroEntradas.module.css'
import Footer from '../Components/Footer/Footer'
import NavBar from '../Components/Navbar/Navbar'

function EditEntrada(){

    return(
        <div>
            <NavBar/>
            <div className={styles.title}>
                <h1>Editar Entradas</h1>
            </div>
            
            <div className={styles.content}>
                <FormEntradaEdit />
            </div>
            <Footer/>
        </div>
    )
}
 
export default EditEntrada;