import { useState } from "react";
import styles from "./MenuHamburguer.module.css";
import Hamburger from "hamburger-react";

export default function HamburguerComponent() {
  const [open, setOpen] = useState(false);
  return (
    <div className={styles["hamburguer"]}>
      <Hamburger size={24} toggled={open} toggle={setOpen} />
      {open && (
        <div className={styles["hamburguer-main"]}>
          <nav className={styles["header_nav_container"]}>
            <li>Home</li>
            <li>Serviços</li>
            <li>Sobre nós</li>
            <li>Novidades</li>
            <li>Loja</li>
            <li className={styles["header_contato"]}>Contate-nos</li>
          </nav>
        </div>
      )}
    </div>
  );
}
