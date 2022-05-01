import styles from '../Footer/Footer.module.css'

function Footer(){
    return(
        <div>
            <footer className={styles.footer}>
                <ul className={styles.footerList}>
                    <li className={styles.footerItem}>
                        <text>© 2022 - QG Finanças</text>
                    </li>
                    <li>
                        <div className={styles.link}>Política de Privacidade</div> 
                    </li>
                    <li className={styles.footerItem}>
                        <text>© 2022 - QG Finanças</text>
                    </li>
                </ul>
            </footer> 
        </div>
    )
}

export default Footer