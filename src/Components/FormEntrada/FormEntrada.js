import styles from './FormEntrada.module.css'
import Input from '../Input/Input'
import SubmitButton from '../SubmitButton/SubmitButton'
import api from '../../services/api'
import { useEffect, useState } from 'react'

function FormEntrada(){

    const [entrada, setEntradas] = useState();

    useEffect(() => {
        api.get("/entrada").then(({data}) =>{
            setEntradas(data);
        });
        console.log(entrada);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])

    return(
        <form className={styles.form}>
            entrada
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

export default FormEntrada;