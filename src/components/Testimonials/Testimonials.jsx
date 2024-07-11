import testImage from "../../assets/images/testimonials.jpeg"

const testimonialsData = [
  {
    review: "This product has changed my life for the better!",
    name: "John Doe",
  },
  {
    review: "Excellent quality and fantastic customer service.",
    name: "Jane Smith",
  },
  {
    review: "I highly recommend this to all my friends and family.",
    name: "Alice Johnson",
  },
];

const Testimonials = () => {
  return (
    <div className="relative bg-cover bg-center h-screen"style={{ backgroundImage: `url(${testImage})` }}>
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4">
        <h2 className="text-4xl font-bold mb-8">Testimonials</h2>
        <div className="max-w-3xl space-y-8">
          {testimonialsData.map((testimonial, index) => (
            <div key={index} className="bg-white bg-opacity-10 p-6 rounded-lg shadow-lg backdrop-filter backdrop-blur-lg">
              <p className="text-xl italic mb-4">{testimonial.review}</p>
              <p className="font-semibold">- {testimonial.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Testimonials;
