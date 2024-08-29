import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faCamera,
  faUserGroup,
  faImages
} from "@fortawesome/free-solid-svg-icons";

const MyServices = () => {
  const services = [
    {
      icon: faUser,
      title: "Portraits",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    },
    {
      icon: faCamera,
      title: "Professional Gear",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    },
    {
      icon: faUserGroup,
      title: "Group Photos",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    },
    {
      icon: faImages,
      title: "Portfolio",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    },
  ];

  return (
    <div className="bg-gray-900 text-white p-8">
      <h2 className="text-3xl font-bold text-center mb-2">
        My <span className="text-blue-500">Services</span>
      </h2>
      <p className="text-center text-gray-400 mb-8">
        Lorem Ipsum is simply dummy text of the printing and type setting
        industry. Lorem Ipsum has been the industry&apos;s standard dummy text
        ever since the 1500s, when an unknown book.
      </p>
      <div className="grid md:grid-cols-2 sm:grid-cols-2 gap-6">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-gray-800 rounded-lg p-6 text-center shadow-md hover:shadow-lg transition-shadow duration-300"
          >
            <div className="text-3xl text-blue-500 mb-4">
              <FontAwesomeIcon icon={service.icon} />
            </div>
            <h3 className="text-xl font-semibold mb-2 text-blue-500">
              {service.title}
            </h3>
            <p className="text-gray-400">{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyServices;
