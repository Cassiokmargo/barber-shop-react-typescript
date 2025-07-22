import { Button } from "../Button";
import GoogleMapsComponent from "../GoogleMapsComponent";
import styles from "./SecondSection.module.css";
import { motion } from "motion/react";
import { useScrollAnimation } from "../../hooks/useScrollAnimation";

const SecondSection = () => {
  const { ref, isInView } = useScrollAnimation();

  const MotionButton = motion(Button);

  return (
    <section ref={ref} className={styles["second_section_container"]}>
      <div className={styles["second_section_container_div"]}>
        <motion.h2
          initial={{ opacity: 0, scale: 0 }}
          animate={
            isInView
              ? { opacity: 1, scale: 1, transition: { duration: 0.7 } }
              : {}
          }
        >
          SERVIÇO ALÉM DAS <br></br> EXPECTATIVAS
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, scale: 0 }}
          animate={
            isInView
              ? {
                  opacity: 1,
                  scale: 1,
                  transition: { duration: 0.7, delay: 0.3 },
                }
              : {}
          }
        >
          Nossa loja de produtos é um espaço criado exclusivamente para homens
          <br></br> que apreciam qualidade premium, pontualidade e um visual
          impecável.<br></br>Ajudamosvocê a ter um visual estiloso e confiante
          da maneira mais discreta.
        </motion.p>
        <MotionButton
          variant="default"
          initial={{ opacity: 0, y: 20 }}
          animate={
            isInView
              ? {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.7, delay: 0.5 },
                }
              : {}
          }
        >
          Enviar solicitação ➜
        </MotionButton>
      </div>
      <motion.div
        className={styles["second_section_container_map"]}
        initial={{ opacity: 0, y: 20 }}
        animate={
          isInView
            ? {
                opacity: 1,
                y: 0,
                transition: { duration: 0.7, delay: 0.6 },
              }
            : {}
        }
      >
        <GoogleMapsComponent />
      </motion.div>
      <div className={styles["second_section_container_div3"]}>
        <motion.img
          initial={{ opacity: 0, x: 30 }}
          animate={
            isInView
              ? {
                  opacity: 1,
                  x: 0,
                  transition: { duration: 0.7, delay: 0.8 },
                }
              : {}
          }
          src="/icons/marker.svg"
          alt="Icone de marcarção"
          className={styles["icones"]}
        ></motion.img>
        <motion.h3
          initial={{ opacity: 0, x: 30 }}
          animate={
            isInView
              ? {
                  opacity: 1,
                  x: 0,
                  transition: { duration: 0.7, delay: 0.9 },
                }
              : {}
          }
        >
          LOCALIZAÇÃO
        </motion.h3>
        <motion.p
          initial={{ opacity: 0, x: 30 }}
          animate={
            isInView
              ? {
                  opacity: 1,
                  x: 0,
                  transition: { duration: 0.7, delay: 0.9 },
                }
              : {}
          }
        >
          128 Winston st. Upper West Side, Manhattan, Nova York, NY 05120
        </motion.p>
        <motion.div
          className={styles["barra_div"]}
          initial={{ opacity: 0, x: 0, scale: 0 }}
          animate={
            isInView
              ? {
                  opacity: 1,
                  x: 0,
                  scale: 1,
                  transition: { duration: 0.7, delay: 0.9 },
                }
              : {}
          }
        ></motion.div>
        <motion.img
          initial={{ opacity: 0, x: 30 }}
          animate={
            isInView
              ? {
                  opacity: 1,
                  x: 0,
                  transition: { duration: 0.7, delay: 0.8 },
                }
              : {}
          }
          src="/icons/telefone.svg"
          alt="Icone de telefone"
          className={styles["icones"]}
        ></motion.img>
        <motion.h3
          initial={{ opacity: 0, x: 30 }}
          animate={
            isInView
              ? {
                  opacity: 1,
                  x: 0,
                  transition: { duration: 0.7, delay: 0.9 },
                }
              : {}
          }
        >
          {" "}
          +27 01234 5678
        </motion.h3>
        <motion.p
          initial={{ opacity: 0, x: 30 }}
          animate={
            isInView
              ? {
                  opacity: 1,
                  x: 0,
                  transition: { duration: 0.7, delay: 0.9 },
                }
              : {}
          }
        >
          Segunda - Sabádo: 8am - 7pm
        </motion.p>
      </div>
    </section>
  );
};

export default SecondSection;
