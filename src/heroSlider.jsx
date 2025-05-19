import Slider from 'react-slick';

import { vehicles } from './sources';

export default function HeroSlider() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: false,
    fade: true,
  };

  return (
    <section className="relative">
      <Slider {...settings}>
        {vehicles.map((slide, index) => (
          <div key={index}>
            <div
              className="h-[60vh] bg-cover bg-center flex items-center justify-center text-white"
              style={{ backgroundImage: `url(${slide.image})` }}
            >
              <div className="bg-black/60 p-8 rounded-xl text-center">
                <h2 className="text-4xl font-bold mb-4">{slide.title}</h2>
                <a
                  href={slide.link}
                  className="bg-blue-600 px-6 py-3 rounded-full hover:bg-blue-700 transition"
                >
                  Voir les véhicules
                </a>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </section>
  );
}
