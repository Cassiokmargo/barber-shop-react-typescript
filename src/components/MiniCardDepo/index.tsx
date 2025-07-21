import './MiniCardDepo.css'
import { Swiper, SwiperSlide } from "swiper/react";

const MiniCardDepo = () => {
   const data = [
    {
      id: 1,
      depo: "''Nunca saí tão satisfeito de um corte de cabelo! O atendimento aqui é impecável e o Barbeiro João realmente entende o que você quer. Recomendo de olhos fechados!''",
      autor: "Pedro Silva",
    },
    {
      id: 2,
      depo: "''O ambiente da barbearia é incrível, um verdadeiro refúgio. Além do corte e da barba serem perfeitos, o bate-papo é sempre bom. Virou meu lugar favorito para relaxar e dar um tapa no visual.''",
      autor: "Lucas Martins",
    },
    {
      id: 3,
      depo: "''Profissionalismo e atenção aos detalhes são as marcas registradas daqui. Desde o café de boas-vindas até o último retoque, tudo é pensado para o cliente. Minha barba nunca esteve tão bem cuidada!''",
      autor: "Rafael Dias",
    },
    {
      id: 4,
      depo: "''Sou cliente fiel há anos e sempre saio com o corte que eu peço, feito com precisão. A equipe é super talentosa e o serviço é de primeira. É mais que uma barbearia, é uma experiência!''",
      autor: "Fernando Gomes",
    },
    {
      id: 5,
      depo: "''A barbearia é um lugar onde me sinto em casa. O Barbeiro, sempre me atende com um sorriso e faz questão de entender exatamente o que eu quero. Recomendo a todos os meus amigos!''",
      autor: "Carlos Souza",
    },
    {
      id: 6,
      depo: "''Além de cortes incríveis, a barbearia oferece um ambiente acolhedor e descontraído. É o lugar perfeito para relaxar e sair com o visual renovado. Não troco por nada!''",
      autor: "Gustavo Lima",
    },
  ];

  return (
    <div className="container_depo">
      <Swiper
        className="carrossel_depo"
        slidesPerView={1}
        spaceBetween={0}
        pagination={{ clickable: true }}
        navigation
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        breakpoints={{
          320: {
            slidesPerView: 1,
            spaceBetween: 20,
            navigation: false,
            slidesPerGroup: 1,
          },
          480: {
            slidesPerView: 1,
            spaceBetween: 30,
          },
          640: {
            slidesPerView: 1,
            spaceBetween: 40,
          },
          768: {
            slidesPerView: 1,
          },

          992: {
            slidesPerView: 1,
            spaceBetween: 30,
          },
        }}
      >
        {data.map((item) => (
          <SwiperSlide key={item.id}>
            <p>{item.depo}</p>
            <h4>{item.autor}</h4>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default MiniCardDepo