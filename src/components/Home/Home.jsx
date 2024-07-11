import AllProductSection from "../AllProductSection/AllProductSection"
import BlackFridayOffer from "../BlackFridayOffer/BlackFridayOffer"
import CategorySection from "../CategorySection/CategorySection"
import Features from "../FeaturesData/Features"
import HeroSection from "../HeroSection/HeroSection"
import OfferSection from "../OfferSection/OfferSection "
import PromotionalSection from "../PromotionalSection/PromotionalSection"
import SubscribeNewsletter from "../SubscribeNewsletter/SubscribeNewsletter"
import Testimonials from "../Testimonials/Testimonials"
import TopBrands from "../TopBrands/TopBrands"


function Home() {
  return (
    <>
      <HeroSection/>
      <CategorySection/>
      <AllProductSection/>
      <OfferSection/>
      <TopBrands/>
      <Testimonials/>
      <Features/>
      <BlackFridayOffer/>
      <PromotionalSection/>
      <SubscribeNewsletter/>
      
    </>
    
  )
}

export default Home