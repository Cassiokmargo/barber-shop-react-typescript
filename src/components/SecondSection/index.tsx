import { Button } from "../Button";
import GoogleMapsComponent from "../GoogleMapsComponent";
import styles from "./SecondSection.module.css";

const SecondSection = () => {
  return (
    <section className={styles["second_section_container"]}>
      <div className={styles["second_section_container_div"]}>
        <h2>SERVIÇO ALÉM DAS <br></br> EXPECTATIVAS</h2>
        <p>
          Nossa loja de produtos é um espaço criado exclusivamente
          para homens<br></br> que apreciam qualidade premium, pontualidade e um visual
          impecável.<br></br>Ajudamosvocê a ter um visual estiloso e confiante da
          maneira mais discreta.
        </p>
        <Button variant="default">Enviar solicitação ➜</Button>
      </div>
      <div className={styles["second_section_container_map"]}>
        <GoogleMapsComponent/>
      </div>
      <div className={styles["second_section_container_div3"]}>
        <img src="/icons/marker.svg" alt="Icone de marcarção" className={styles["icones"]} />
        <h3>LOCALIZAÇÃO</h3>
        <p> 
            128 Winston st. Upper West Side, Manhattan,
            Nova York, NY 05120
        </p>
        <div className={styles["barra_div"]}>
        </div>
        <img src="/icons/telefone.svg" alt="Icone de telefone" className={styles["icones"]}/>
        <h3> +27 01234 5678</h3>
        <p>
            Segunda - Sabádo: 8am - 7pm
        </p>
      </div>
    </section>
  );
};

export default SecondSection;
