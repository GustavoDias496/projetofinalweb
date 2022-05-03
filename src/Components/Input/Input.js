import styles from './Input.module.css'

function Input({onChange, type, text, name, placeholder, value}){
    return(
        <div className={styles.formControl}>
            <label htmlFor={name}>{text}:</label>
            <input 
            onChange={onChange}
            type={type} 
            name={name} 
            id={name} 
            placeholder={placeholder} 
            value={value}
            />
        </div>
    )

}
 
export default Input;