import { Swiper, SwiperSlide } from "swiper/react";
import "./Carrossel.css";

const Carrossel = () => {
  const data = [
    {
      id: 1,
      image: "imagens/corte1.png",
    },
    {
      id: 2,
      image: "imagens/corte2.png",
    },
    {
      id: 3,
      image: "imagens/corte3.png",
    },
    {
      id: 4,
      image: "imagens/corte4.png",
    },
    {
      id: 5,
      image: "imagens/corte5.png",
    },
    {
      id: 6,
      image: "imagens/corte6.png",
    },
  ];

  return (
    <div>
      <Swiper
        className="carrossel"
        slidesPerView={'auto'}
        spaceBetween={16}      
        centeredSlides={false} 
        pagination={{ clickable: true }}
        navigation
        breakpoints={{
          320: {
            slidesPerView: 1,
            spaceBetween: 20,
            navigation: false,
            slidesPerGroup: 1,
          },
          480: {
            slidesPerView: 1,
            spaceBetween: 20,
            navigation: false,
            slidesPerGroup: 1,
          },
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
            navigation: false,
            slidesPerGroup: 1,
          },
          900: {
            slidesPerView: 1,
            spaceBetween: 20,
            navigation: false,
            slidesPerGroup: 1,    
          },
          992: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          1280: {
            slidesPerView: 2,
            spaceBetween: -20,
          },
          1560: {
            slidesPerView: 3,
            spaceBetween:20,
          }
        }}
      >
        {data.map((item) => (
          <SwiperSlide key={item.id}>
            <img
              src={item.image}
              alt="imagem de corte de cabelo"
              className="slide-item"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Carrossel;
