import HamburguerComponent from '../MenuHamburguer'
import styles from './Header.module.css'

const Header = () => {
  return (
    <header className={`${styles.header_section}`}>
        <h2 className={styles["header_titulo"]}>MODERN MANE</h2>
        <HamburguerComponent />
        <nav className={styles["header_nav_container"]}>
            <li>Home</li>
            <li>Serviços</li>
            <li>Sobre nós</li>
            <li>Novidades</li>
            <li>Loja</li>
        </nav>
        <h2 className={styles["header_contato"]}>Contate-nos</h2>
    </header>
  )
}

export default Header