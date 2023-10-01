import { Button } from '@chakra-ui/react'
// import styles from './ButtonFatec.module.css'

interface Props{
    type: 'button' | 'submit' | 'reset'
    label: string
}

function ButtonFatec({type, label}: Props){
    return(
        <Button size='lg' colorScheme='red' type={type}>
            {label}
        </Button>
        // <button className={styles.botaoFatec} type={type}>{label}</button>
    )
}

export default ButtonFatec