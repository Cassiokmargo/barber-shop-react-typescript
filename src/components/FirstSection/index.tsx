import { Button } from "../Button";
import styles from "./FirstSection.module.css";
import { motion } from "motion/react";

const FirstSection = () => {
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
  };

  return (
    <section className={`${styles.first_section}`}>
      <div className={styles["first_container_div1"]}>
        <form
          action=""
          className={styles["form_container"]}
          onSubmit={handleSubmit}
        >
          <h2>Faça um agendamento</h2>
          <label htmlFor="nome" aria-placeholder="Digite seu nome"></label>
          <input
            type="text"
            id="nome"
            name="nome"
            placeholder="Digite seu nome"
          />

          <label htmlFor="email" aria-placeholder="Digite seu email"></label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Digite seu email"
          />

          <label
            htmlFor="telefone"
            aria-placeholder="Digite seu telefone"
          ></label>
          <input
            type="text"
            id="telefone"
            name="telefone"
            placeholder="Digite seu telefone"
          />

          <label htmlFor="data" aria-placeholder="Data e horario"></label>
          <input
            type="date"
            id="data"
            name="data"
            placeholder="Data e horario"
          />
          <Button variant="default">Agendar</Button>
        </form>
      </div>
      <div className={styles["first_container_div2"]}>
        <motion.h2
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0, transition: { duration: 0.7 } }}
        >
          ONDE A TRADIÇÃO<br></br>ENCONTRA O ESTILO MODERNO
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, x: -50 }}
          animate={{
            opacity: 1,
            x: 0,
            transition: { duration: 0.7, delay: 0.3 },
          }}
        >
          Nossa missão é oferecer serviços de beleza excepcionais em um ambiente
          descontraído e amigável. Seja para um corte de cabelo clássico, um
          degradê moderno ou uma barba rente, nossos barbeiros qualificados se
          dedicam a garantir que você saia com a melhor aparência e se sinta no
          seu melhor.
        </motion.p>
      </div>
    </section>
  );
};

export default FirstSection;
