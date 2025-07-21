import { Button } from '../Button';
import FooterLinks from './components/FooterLinks';
import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles["footer_container"]}>
        <div className={styles["footer_container_div1"]}>
            <h2>MODERN MANE</h2>
            <p>Wood Lane Forest Hills, NY 11375</p>
            <p>(12) 3456-7890</p>
            <p>reserve@modernmane.com</p>
            <p>info@modernmane.com</p>
            <div>
                <a href="#"><img src="/icons/facebook.svg" alt="Logo do facebook" /></a>
                <a href="#"><img src="/icons/twitter.svg" alt="Logo do twitter" /></a>
                <a href="#"><img src="/icons/instagram.svg" alt="Logo do instagram" /></a>
                <a href="#"><img src="/icons/linkedin.svg" alt="Logo do linkeding" /></a>
            </div>
        </div>         
            <FooterLinks titulo='Menu' links={["Home", "Sobre", "Galeria", "Novidades"]}/>  
            <FooterLinks titulo='Links Rapídos' links={["Menu", "Oportunidade", "Politica de Privacidade", "Localização e Contato"]}/>  
        <div className={styles["footer_container_div2"]}>
            <h3>Funcionamento</h3>
            <p>Seg-Sex 8:00AM - 7:00PM</p>
            <p>Sabádo 9:00AM - 3:00PM</p>
            <Button variant='default'>Agende agora</Button>
            <div className={styles["footer_texto2"]}>
                <p>Copyright MODERN MANE. All Rights Reserved. | Usman A.</p>
            </div>
        </div>  
    </footer>
    
  )
}

export default Footer