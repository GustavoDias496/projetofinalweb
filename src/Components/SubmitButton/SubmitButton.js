import styles from './SubmitButton.module.css';

function SubmitButton({text}){
    return(
        <div className={styles.content}>
            <button className={styles.btn}>{text}</button>
            <br/>
        </div>
    )
}
 
export default SubmitButton; 