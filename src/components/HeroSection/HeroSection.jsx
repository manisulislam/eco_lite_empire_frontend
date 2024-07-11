
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import image1 from "../../assets/images/1.png"
import image2 from "../../assets/images/2.png"
import image3 from "../../assets/images/3.png"

const HeroSection = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        autoplay: true,
        slidesToShow: 1,
        slidesToScroll: 1,
      };
      const slides = [
        { id: 1, title: 'Slide 1', description: 'This is the first slide', image: image1 },
        { id: 2, title: 'Slide 2', description: 'This is the second slide', image: image2},
        { id: 3, title: 'Slide 3', description: 'This is the third slide', image: image3 },
      ];
  return (
    <div className="hero-section bg-gray-100">
    <Slider {...settings}>
      {slides.map(slide => (
        <div key={slide.id} className="relative">
          <img src={slide.image} alt={slide.title} className="w-full h-96 object-cover" />
          <div className="absolute inset-0 bg-opacity-50 flex flex-col justify-center items-center text-white">
            {/* <h2 className="text-3xl font-bold mb-4">{slide.title}</h2> */}
            {/* <p className="text-lg">{slide.description}</p> */}
          </div>
        </div>
      ))}
    </Slider>
  </div>
  )
}

export default HeroSection