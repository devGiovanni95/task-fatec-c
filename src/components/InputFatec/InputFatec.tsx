// import styles from './InputFatec.module.css';
import styles2 from './InputFatec.module.css'

interface Props2 {
  type: 'button' | 'checkbox' | 'color' | 'date' | 'datetime-local' | 'email' | 'file' | 'hidden' | 'image' | 'month' | 'number' | 'password' | 'radio' | 'range' | 'reset' | 'search' | 'submit' | 'tel' | 'text' | 'time' | 'url' | 'week';
  placeholder: string;
}

function InputFatec({ type, placeholder }: Props2) {
  return (
    <input className={styles2.inputFatec} type={type} placeholder={placeholder} />
  )
}

export default InputFatec;
