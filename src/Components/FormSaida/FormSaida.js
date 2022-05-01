import styles from './FormSaida.module.css'
import Input from '../Input/Input'
import SubmitButton from '../SubmitButton/SubmitButton';

function FormSaida(){

    return(
        <form className={styles.form}>
            saida
            <Input 
                type="text" 
                text="Nome do Produto"
                name="name"
                placeholder="Digite o nome do produto"
            />
            <Input 
                type="number" 
                text="Valor Unitário"
                name="unitaryValue"
                placeholder="Digite o valor unitário"
            />
            <Input 
                type="number" 
                text="Quantidade"
                name="quant"
                placeholder="Digite a quantidade"
            />
            <Input 
                type="number" 
                text="Valor Total"
                name="amount"
                placeholder="Digite o valor total"
            />
            <Input 
                type="text" 
                text="Descrição"
                name="description"
                placeholder="Digite uma descrição sobre o produto"
            />
            <SubmitButton text="Enviar"/>
        </form>
    )
}

export default FormSaida;