import CardTituloESubtitulo from "../CardTituloESubtitulo";
import Carrossel from "../Carrossel";
import CortesPrecos from "../CortesPrecosComponent";
import MiniCardDepo from "../MiniCardDepo";
import styles from "./ThirdSection.module.css";

const ThirdSection = () => {
  return (
    <section className={styles["third_section_container"]}>
      <div className={styles["third_container_div"]}>
        <CardTituloESubtitulo
          h2="DESCUBRA NOSSO TRABALHOS"
          p="Nossa equipe de barbeiros experientes é dedicada à sua arte.
            Mantemo-nos atualizados com as últimas técnicas e estilos para
            garantir que você receba o melhor serviço possível."
        />
        <div className={styles["third_container_div_carrossel"]}>
          <Carrossel />
        </div>
      </div>
      <div className={styles["third_container_div2"]}>
        <div className={styles["third_container_div_cortes"]}>
          <div className={styles["third_container_depo"]}>
            <MiniCardDepo />
          </div>
          <div className={styles["third_container_cortes"]}>
            <CardTituloESubtitulo h2="NOSSOS PREÇOS" />
            <div className={styles["third_container_precos"]}>
              <CortesPrecos corte="CORTE DE CABELO" preco="R$40" />
              <div className={styles["barra_div"]}></div>
              <CortesPrecos corte="BARBA" preco="R$35" />
              <div className={styles["barra_div"]}></div>
              <CortesPrecos corte="CORTE DE CABELO + BARBA" preco="R$70" />
              <div className={styles["barra_div"]}></div>
              <CortesPrecos corte="APARAR BARBA" preco="R$15" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ThirdSection;
