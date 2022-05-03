import { useEffect, useState } from 'react'
import styles from './Historico.module.css'
import api from '../services/api'
import { Link } from 'react-router-dom'
import Footer from '../Components/Footer/Footer'
import NavBar from '../Components/Navbar/Navbar'
function Historico(){

    const [entradas, setEntradas] = useState([])
    const [saidas, setSaidas] = useState([])

    useEffect(()=> {
        api.get('/saida')
        .then((response) =>{
            setSaidas(response.data)
        })
        .catch(() =>{
            console.log('deu errado!')
        })
    }, [])
    
    useEffect(()=> {
        api.get('/entrada')
        .then((response) =>{
            setEntradas(response.data)
        })
        .catch(() =>{
            console.log('deu errado!')
        })
    },[])


    const deleteDataOutput = (id, e)=>{
        api.delete(`/saida/${id}`)
        .then((response) =>{
            setSaidas(saidas.filter(saida => saida._id !== id))
        })
        .catch(() =>{
            console('excluir não deu certo!')
        })
    }

    const deleteDataInput = (id, e)=>{
        api.delete(`/entrada/${id}`)
        .then((response) =>{
            setEntradas(entradas.filter(entrada => entrada._id !== id))
        })
        .catch(() =>{
            console('excluir não deu certo!')
        })
    }

    const arrSaidas = saidas.map((saida, index) =>{
        return(
                <tr>
                    <th className={styles.th}>{saida._id}</th>
                    <th className={styles.th}>{saida.nome}</th>
                    <th className={styles.th}>{saida.valorUnitario}</th>
                    <th className={styles.th}>{saida.quantidade}</th>
                    <th className={styles.th}>{saida.descricao}</th>
                    <th className={styles.th}>{saida.valorTotal}</th>
                    <th className={styles.th}><Link to={{ pathname: `/EditSaida/${saida._id}`}}><button className={styles.button}>Editar</button></Link></th>
                    <th className={styles.th}><button onClick={(e) =>deleteDataOutput(saida._id, e)} className={styles.button}>Excluir</button></th>
                </tr>
        )
    })
 
    const arrEntradas = entradas.map((entrada, index) =>{
        return(
                <tr>
                    <th className={styles.th}>{entrada._id}</th>
                    <th className={styles.th}>{entrada.nome}</th>
                    <th className={styles.th}>{entrada.valorUnitario}</th>
                    <th className={styles.th}>{entrada.quantidade}</th>
                    <th className={styles.th}>{entrada.descricao}</th>
                    <th className={styles.th}>{entrada.valorTotal}</th>
                    <th className={styles.th}><Link to={{ pathname: `/EditEntrada/${entrada._id}`}}><button className={styles.button}>Editar</button></Link></th>
                    <th className={styles.th}><button onClick={(e) =>deleteDataInput(entrada._id, e)} className={styles.button}>Excluir</button></th>
                </tr>
        )
    })

    return(
        <div className={styles.content}>
            <div className={styles.header}>
                <NavBar/> 
            </div>
            <div className={styles.titleInput}>
                <h1>Entradas</h1>
            </div>
                <table className={styles.table}>
                    <tr className={styles.tr}>
                        <th>Id</th>
                        <th>Nome</th>
                        <th>Valor Unitário</th>
                        <th>Quantidade</th>
                        <th>Descrição</th>
                        <th>Valor Total</th>
                    </tr>
                    {arrEntradas}
                </table>
    
                <div className={styles.titleOutput}>
                        <h1>Saídas</h1>
                </div>
                <table className={styles.table}>
                    <tr className={styles.tr}>
                        <th>Id</th>
                        <th>Nome</th>
                        <th>Valor Unitário</th>
                        <th>Quantidade</th>
                        <th>Descrição</th>
                        <th>Valor Total</th>
                    </tr>
                    {arrSaidas}
                </table>
                <br/>
                <br/>
                <br/>
            <Footer/>
        </div>
    )
}

export default Historico