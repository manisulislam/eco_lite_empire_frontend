
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import brandImg1 from "../../assets/images/brand_one.png"
import brandImg2 from "../../assets/images/brand_two.png"
import brandImg3 from "../../assets/images/brand_three.png"
import brandImg4 from "../../assets/images/brand_four.png"
import brandImg5 from "../../assets/images/brand_fiv.png"
import brandImg6 from "../../assets/images/brand_six.png"

const brandsData = [
  { name: "Brand 1", image: brandImg1 },
  { name: "Brand 2", image: brandImg2 },
  { name: "Brand 3", image: brandImg3 },
  { name: "Brand 4", image: brandImg4 },
  { name: "Brand 5", image: brandImg5 },
  { name: "Brand 6", image: brandImg6 },
];

const TopBrands = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 300,
    autoplay: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="py-12 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-center mb-8">Top Brands</h2>
        <Slider {...settings}>
          {brandsData.map((brand, index) => (
            <div key={index} className="p-4">
              <div className="bg-white p-6 rounded-lg shadow-lg flex items-center justify-center">
                <img src={brand.image} alt={brand.name} className="max-h-24" />
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default TopBrands;
