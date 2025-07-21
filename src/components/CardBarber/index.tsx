import styles from './CardBarber.module.css'

interface CardBarberProps {
    nome: string;
    descricao: string;
    linkedin: string;
    instagram: string;
    imagem: string;
}

const CardBarber = ({ nome, descricao, linkedin, instagram, imagem }:CardBarberProps) => {
  return (
    <div className={styles["cardbarber_container"]}>
        <div className={styles["cardbarber_container_nome"]}>
            <h3>{nome}</h3>
            <p>{descricao}</p>
        </div>
        <div className={styles["cardbarber_container_social"]}>
            <a href="#"><img src={linkedin} alt="Logo do linkeding" /></a>
            <a href="#"><img src={instagram} alt="Logo do instagram" /></a>
        </div>
        <div className={styles["cardbarber_container_perfil"]}>
            <img src={imagem} alt="Foto de perfil" />
        </div>
    </div>
  )
}

export default CardBarber