import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuoteLeft } from "@fortawesome/free-solid-svg-icons";
import profile1 from "../../assets/profile1.jpg";
import profile2 from "../../assets/profile2.jpg";
import profile3 from "../../assets/profile3.jpg";

const MyTestimonials = () => {
  const testimonials = [
    {
      image: profile1,
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta consequatur, optio dolores aliquid.",
      name: "Client Name",
      rating: 5,
    },
    {
      image: profile2,
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta consequatur, optio dolores aliquid.",
      name: "Client Name",
      rating: 5,
    },
    {
      image: profile3,
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta consequatur, optio dolores aliquid.",
      name: "Client Name",
      rating: 4,
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="bg-gray-900 text-white p-8">
      <h2 className="text-3xl font-bold text-center mb-2">
        My <span className="text-blue-500">Testimonial</span>
      </h2>
      <p className="text-center text-gray-400 mb-8">What Our Clients Say</p>
      <Slider {...settings}>
        {testimonials.map((testimonial, index) => (
          <div key={index} className="px-4">
            <div className="bg-gray-800 rounded-lg p-6 text-center shadow-md hover:shadow-lg transition-shadow duration-300 relative">
              <div className="text-blue-500 text-3xl absolute top-0 left-0 ml-4 mt-4">
                <FontAwesomeIcon icon={faQuoteLeft} />
              </div>
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="w-16 h-16 rounded-full mx-auto mb-4 border-4 border-gray-900"
              />
              <p className="text-gray-400 mb-4">{testimonial.text}</p>
              <div className="text-yellow-500">
                {"★".repeat(testimonial.rating)}
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default MyTestimonials;
