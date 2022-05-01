import FormEntrada from '../Components/FormEntrada/FormEntrada';
import styles from './CadastroEntradas.module.css'


function CadastroEntradas(){
    return(
        <div>
            <div className={styles.title}>
                <h1>Cadastro de Entradas</h1>
            </div>
            
            <div className={styles.content}>
                <FormEntrada />
            </div>
        </div>
    )
}

export default CadastroEntradas;