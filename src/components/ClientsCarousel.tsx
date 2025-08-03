"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

// Importa los estilos de Swiper
import "swiper/css";
import "swiper/css/autoplay";

// Lista de logos de clientes (puedes mover esto a tu archivo de datos si prefieres)
const clientLogos = [
  {
    src: "/assets/clientes/otrologo.png", // Reemplaza con tus archivos de logo
    alt: "Logo Cliente 1",
  },
  {
    src: "/assets/clientes/pngegg.png",
    alt: "Logo Cliente 2",
  },
  // Añade más logos según necesites
];

const ClientsCarousel = () => {
  return (
    <section className="py-16 sm:py-24 bg-transparent">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold text-center text-foreground mb-12">
          Empresas que confían en nosotros
        </h2>
        <Swiper
          modules={[Autoplay]}
          spaceBetween={50}
          slidesPerView={2}
          loop={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          breakpoints={{
            640: {
              slidesPerView: 3,
              spaceBetween: 40,
            },
            768: {
              slidesPerView: 4,
              spaceBetween: 50,
            },
            1024: {
              slidesPerView: 5,
              spaceBetween: 60,
            },
          }}
          className="w-full"
        >
          {clientLogos.map((logo, index) => (
            <SwiperSlide key={index} className="flex items-center justify-center">
              <img
                src={logo.src}
                alt={logo.alt}
                className="max-h-12 w-auto object-contain grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default ClientsCarousel;