
import story from "../../assets/images/story.jpg"
import ceo from "../../assets/images/ceo.png"
import cto from "../../assets/images/cto.png"
import cfo from "../../assets/images/cfo.jpg"
import marketing from "../../assets/images/marketing.png"

const About = () => {
  return (
    <div className="container mx-auto py-12 px-4">
    <h2 className="text-4xl font-bold text-center mb-8">About Us</h2>
    
    {/* Our Story */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
      <div>
        <h3 className="text-2xl font-semibold mb-4">Our Story</h3>
        <p className="text-lg text-gray-700 mb-6">
          Our company was founded with the vision of delivering high-quality products that make a difference in our customers lives. We started as a small team with big dreams and a passion for innovation.
        </p>
        <p className="text-lg text-gray-700 mb-6">
          Over the years, we have grown and evolved, but our commitment to excellence has remained unchanged. We continue to innovate and strive for perfection in everything we do, ensuring that we meet and exceed the expectations of our customers.
        </p>
      </div>
      <div>
        <img
          src={story}
          alt="Our Story"
          className="w-full h-auto object-cover rounded-lg shadow-lg"
        />
      </div>
    </div>
    
    {/* Our Mission and Vision */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
      <div>
        <h3 className="text-2xl font-semibold mb-4">Our Mission</h3>
        <p className="text-lg text-gray-700 mb-6">
          Our mission is to provide exceptional value and exceed customer expectations with every product we offer. We believe in the power of technology and innovation to transform the way we live and work.
        </p>
        <p className="text-lg text-gray-700 mb-6">
          We are dedicated to creating solutions that are not only effective but also sustainable and environmentally friendly. Our goal is to make a positive impact on the world, one product at a time.
        </p>
      </div>
      <div>
        <h3 className="text-2xl font-semibold mb-4">Our Vision</h3>
        <p className="text-lg text-gray-700 mb-6">
          Our vision is to be a global leader in our industry, known for our commitment to quality, innovation, and customer satisfaction. We aim to set the standard for excellence and be the brand of choice for customers worldwide.
        </p>
        <p className="text-lg text-gray-700 mb-6">
          We envision a future where our products are an integral part of everyday life, enhancing the experiences and well-being of people around the world.
        </p>
      </div>
    </div>
    
    {/* Our Values */}
    <div className="mb-12">
      <h3 className="text-2xl font-semibold mb-4">Our Values</h3>
      <p className="text-lg text-gray-700 mb-6">
        Our values are the foundation of our company and guide everything we do. We believe in:
      </p>
      <ul className="list-disc pl-6 text-lg text-gray-700 mb-6">
        <li className="mb-2">Integrity: We conduct our business with the highest ethical standards.</li>
        <li className="mb-2">Innovation: We embrace creativity and seek out new ways to solve problems.</li>
        <li className="mb-2">Quality: We are committed to delivering products of the highest quality.</li>
        <li className="mb-2">Customer Focus: We prioritize the needs and satisfaction of our customers.</li>
        <li className="mb-2">Sustainability: We are dedicated to sustainable practices and reducing our environmental impact.</li>
      </ul>
    </div>
    
    {/* Meet Our Team */}
    <div className="mt-12">
      <h3 className="text-2xl font-semibold mb-4 text-center">Meet Our Team</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        <div className="bg-white shadow-lg rounded-lg p-6 text-center">
          <img
            src={ceo}
            alt="Team Member 1"
            className="w-24 h-24 rounded-full mx-auto mb-4"
          />
          <h4 className="text-xl font-semibold mb-2">MD Anisul Islam</h4>
          <p className="text-gray-700">CEO & Founder</p>
        </div>
        <div className="bg-white shadow-lg rounded-lg p-6 text-center">
          <img
            src={cto}
            alt="Team Member 2"
            className="w-24 h-24 rounded-full mx-auto mb-4"
          />
          <h4 className="text-xl font-semibold mb-2">Jane Smith</h4>
          <p className="text-gray-700">Chief Technology Officer</p>
        </div>
        <div className="bg-white shadow-lg rounded-lg p-6 text-center">
          <img
            src={marketing}
            alt="Team Member 3"
            className="w-24 h-24 rounded-full mx-auto mb-4"
          />
          <h4 className="text-xl font-semibold mb-2">Emily Johnson</h4>
          <p className="text-gray-700">Head of Marketing</p>
        </div>
        <div className="bg-white shadow-lg rounded-lg p-6 text-center">
          <img
            src={cfo}
            alt="Team Member 4"
            className="w-24 h-24 rounded-full mx-auto mb-4"
          />
          <h4 className="text-xl font-semibold mb-2">Michael Brown</h4>
          <p className="text-gray-700">Chief Financial Officer</p>
        </div>
      </div>
    </div>
  </div>
  )
}

export default About