import { React } from "react";
import styles from "./Login.module.css";
import logo from "../img/QGLogin.png";
import { Link } from 'react-router-dom'


function Login(){
      
    return(
        <div className={styles.Content}>
      <div className={styles.ContentBox}>
        <div className={styles.BoxIcon}>
          <img src={logo} alt="logoIcon"  className={styles.img}/>
        </div>
        <div className={styles.BoxTitle}>Seja bem Vindo(a) ao</div>
        <div className={styles.BoxSubTitle}>QGFinanças</div>
        <div className={styles.BoxInput}>
          <div className={styles.BoxInputLogin}>
            <form>
              <label>
                <input
                  type="text"
                  name="name"
                  placeholder="  Digite o usuário..."
                />
              </label>
            </form>
          </div>
          <br />
          <div className={styles.BoxInputPassword}>
            <form>
              <label>
                <input
                  type="password"
                  name="name"
                  placeholder="  Digite a senha"
                />
              </label>
              <div className={styles.ButtonSendDataLogin}>
                <Link to="/Home"><button >Entrar</button></Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
    )
}

export default Login