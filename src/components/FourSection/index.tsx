import CardBarber from "../CardBarber";
import CardBarberJoin from "../CardBarberJoin";
import CardTituloESubtitulo from "../CardTituloESubtitulo";
import styles from './FourSection.module.css'

const FourSection = () => {
  return (
    <section className={styles["four_section_container"]}>
      <div className={styles["four_container_div"]}>
        <CardTituloESubtitulo
          h2="CONHEÇA NOSSOS ESPECIALISTAS"
          p="
            Cada membro da nossa equipe está comprometido em proporcionar uma experiência de higiene excepcional,
            garantindo que você saia do nosso salão com a melhor aparência e se sentindo no seu melhor."
        />
      </div>
      <div className={styles["four_container_div2"]}>
        <CardBarber nome="João Silva" descricao="Barbeiro Mestre" instagram="icons/instagram.svg" linkedin="icons/linkedin.svg" imagem="imagens/avatar1.svg"/>
        <CardBarber nome="Carlos Romero" descricao="Barbeiro" instagram="icons/instagram.svg" linkedin="icons/linkedin.svg" imagem="imagens/avatar2.svg"/>
        <CardBarber nome="Cleiton Brito" descricao="Barbeiro" instagram="icons/instagram.svg" linkedin="icons/linkedin.svg"imagem="imagens/avatar3.svg"/>
        <CardBarberJoin h3="Gostaria de se juntar à nossa equipe?" descricao="Envie o curriculo"/>
      </div>
    </section>
  );
};

export default FourSection;
