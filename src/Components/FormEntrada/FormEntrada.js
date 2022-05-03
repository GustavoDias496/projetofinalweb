import styles from './FormEntrada.module.css'
import Input from '../Input/Input'
import SubmitButton from '../SubmitButton/SubmitButton'
import api from '../../services/api'
import { useState } from 'react'

function FormEntrada(){

    const [data, setData] = useState({
        name: "",
        unitaryValue: "",
        quant: "",
        amount: "",
        description: "" 
    })


    function submit(e){
        e.preventDefault();
        api.post('/entrada',{
            nome: data.name,
            valorUnitario: data.unitaryValue,
            quantidade: data.quant,
            descricao: data.description,
            valorTotal: data.amount
        })
        .then(res=>{
            console.log(res.data)
            setData({
                name: "",
                unitaryValue: "",
                quant: "",
                amount: "",
                description: ""
            });
        })
    }

    function handle(e){
        const newdata={...data}
        newdata[e.target.name] = e.target.value
        setData(newdata)
        console.log(newdata)
    }

    return(
        <form onSubmit={(e)=> submit(e)} className={styles.form}>
            <Input 
                onChange={(e)=>handle(e)}
                value={data.name}
                type="text" 
                text="Nome do Produto"
                name="name"
                placeholder="Digite o nome do produto"
            />
            <Input 
                onChange={(e)=>handle(e)}
                value={data.unitaryValue}
                type="number" 
                text="Valor Unitário"
                name="unitaryValue"
                placeholder="Digite o valor unitário"
            />
            <Input 
                onChange={(e)=>handle(e)}
                value={data.quant}
                type="number" 
                text="Quantidade"
                name="quant"
                placeholder="Digite a quantidade"
            />
            <Input 
                onChange={(e)=>handle(e)}
                value={data.amount}
                type="number" 
                text="Valor Total"
                name="amount"
                placeholder="Digite o valor total"
            />
            <Input 
                onChange={(e)=>handle(e)}
                value={data.description}
                type="text" 
                text="Descrição"
                name="description"
                placeholder="Digite uma descrição sobre o produto"
            />
                <SubmitButton text="Enviar"/>
                <br/><br/>
        </form>
    )
}

export default FormEntrada;