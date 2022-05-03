import styles from './Home.module.css'
import api from '../services/api'
import { useEffect, useState } from 'react'

import homeImg from '../img/home.png'
import Footer from '../Components/Footer/Footer'
import NavBar from '../Components/Navbar/Navbar'

function Home(){

    const [entradas, setEntradas] = useState([])
    const [saidas, setSaidas] = useState([])

    useEffect(()=> {
        api.get('/entrada')
        .then((response) =>{
            setEntradas(response.data)
            console.log('entrada deu certo!')
        })
        .catch(() =>{
            console.log('erro nas entradas!')
        })
    },[])

    useEffect(()=> {
        api.get('/saida')
        .then((response) =>{
            setSaidas(response.data)
            console.log('saida deu certo!')
        })
        .catch(()=>{
            console.log('erro nas saidas!')
        })
    }, [])

    function somaEntrada(){

        var total = 0
        for(var i = 0; i< entradas.length; i++){
            total = total + entradas[i].valorTotal;
        }
        return total;
    }

    function somaSaida(){
        var totalSaida = 0
        for(var i = 0; i < saidas.length; i++){
            totalSaida = totalSaida + saidas[i].valorTotal
        }
        return totalSaida;
    }

    var a = somaEntrada() 
    var b = somaSaida()
    var receitaFinal = a - b
    console.log('valor de a é ' + a)
    console.log('valor de b é ' + b)


    return(
        <div className={styles.fullContent}>
            <NavBar/>
            <div  className={styles.content}>
                <div className={styles.cardData1}>
                    <div className={styles.cardOneTitle}>
                        <p>Entrada:</p>
                    </div>
                    <div className={styles.value}>
                        <p>R$ {somaEntrada()}</p>
                    </div>
                </div>
                <br/>
                <div className={styles.cardData2}>
                    <div className={styles.cardTwoTitle}>
                        <p>Saída:</p>
                    </div>
                    <div className={styles.value}>
                            <p>R$ {somaSaida()}</p>
                    </div>
                </div>
                <br/>
                <div className={styles.cardData3}>
                    <div className={styles.cardThreeTitle}>
                        <p>Total:</p>
                    </div>
                    <div className={styles.value}>
                        <p>R$ {receitaFinal}</p>
                    </div>
                </div>
            </div>
            <div className={styles.imgLogo}>
                <img src={homeImg} alt="fundo dinheiro"/>
            </div>
            <Footer/>
        </div>
    )
}

export default Home