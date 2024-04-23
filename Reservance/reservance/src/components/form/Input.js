import styles from './Input.module.css'

function Input(props){

    return(
        <div className={styles.form_control}>
            <label htmlFor={props.name}>{props.text}</label>
            <input style={props.style} type={props.type} name={props.name} id={props.name} placeholder={props.placeholder} onChange={props.onChange} value={props.value} />
        </div>
    )

}

export default Input;