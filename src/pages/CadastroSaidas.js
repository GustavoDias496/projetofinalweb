import FormSaida from '../Components/FormSaida/FormSaida';
import styles from './CadastroSaidas.module.css'

function CadastroSaidas(){
    return(
        <div>
            <div className={styles.title}>
                <h1>Cadastro de Saidas</h1>
            </div>
        
            <div className={styles.content}>
                <FormSaida />
            </div>
        </div>
    )
}

export default CadastroSaidas