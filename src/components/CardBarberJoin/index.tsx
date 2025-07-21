import { Button } from '../Button';
import styles from './CardBarberJoin.module.css'

interface CardBarberJoinProps {    
    h3: string;
    descricao: string;
}

const CardBarberJoin = ({ h3, descricao }:CardBarberJoinProps) => {
  return (
    <div className={styles["cardbarberjoin_container"]}>
        <div className={styles["cardbarberjoin_container_nome"]}>
            <h3>{h3}</h3>
            <a href="#">{descricao}</a>
            <Button variant='icon'>➜</Button>            
        </div>
    </div>
  )
}

export default CardBarberJoin