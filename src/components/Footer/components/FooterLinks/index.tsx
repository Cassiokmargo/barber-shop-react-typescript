import styles from "../../Footer.module.css";

interface FooterLinksProps {
    titulo: string;
    links: string[];
}

const FooterLinks = ({ titulo, links }: FooterLinksProps) => {
  return (
    <div className={styles["footer_links_container"]}>
        <h3>{titulo}</h3>
        {links.map((link, index) => (
            <a key={index} href="#">{link}</a>
        ))}
    </div>
  )
}

export default FooterLinks