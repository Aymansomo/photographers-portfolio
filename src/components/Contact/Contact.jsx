import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ContactForm from "./ContactForm"
import { faEnvelopeOpen, faMapLocationDot, faPhone } from "@fortawesome/free-solid-svg-icons";
import { faFacebook, faInstagram, faLinkedin, faTwitter } from "@fortawesome/free-brands-svg-icons";

function Contact() {
  const ContactInfo = [
    {
      href: "#",
      icon: faMapLocationDot,
      title: "Address Point",
      subject: "123 Stree New York City , United States Of America 750065.",
    },
    {
      href: "#",
      icon: faEnvelopeOpen,
      title: "mail me",
      subject: "me@mail.com",
    },
    {
      href: "#",
      icon: faPhone,
      title: "call me",
      subject: "+123 456 789",
    },
  ];

  const socailMedias = [
    { href: "#", icon: faInstagram },
    { href: "#", icon: faFacebook },
    { href: "#", icon: faTwitter },
    { href: "#", icon: faLinkedin },
  ];

  return (
    <div className="mb-14">
      <div className="text-center">
        <h1 className="sm:text-7xl text-4xl my-10 uppercase font-bold text-white">
          My <span className="text-blue-500">Contact</span>
        </h1>
      </div>
      <div className="flex justify-center text-white ">
        <div className="w-[85%]  grid sd:grid-cols-3 grid-cols-1 items-center ">
          <div className="sd:w-[35ch] col-span-1">
            <div className="pb-5">
              <h2 className="mb-7 sm:text-4xl text-2xl">
                {" "}
                Don&apos;t be shy !
              </h2>
              <p className="text-sm">
                Feel free to get in touch with me. I am always open to
                discussing new projects, creative ideas or opportunities to be
                part of your visions.
              </p>
            </div>
            <div className="">
              {ContactInfo.map((item, index) => (
                <div key={index} className="">
                  <a href={item.href} className="flex ">
                    <FontAwesomeIcon
                      icon={item.icon}
                      className="size-8 pr-4 text-blue-500 relative top-5"
                    />
                    <div className="pt-5">
                      <h3 className="opacity-[.8]">{item.title}</h3>
                      <p className="font-bold">{item.subject}</p>
                    </div>
                  </a>
                </div>
              ))}
            </div>
            <div className="my-7 ">
              <ul className="flex p-2">
                {socailMedias.map((media, index) => (
                  <li key={index}>
                    <a href={media.href}>
                      <FontAwesomeIcon
                        className="text-3xl px-2"
                        icon={media.icon}
                      />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="col-span-2">
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact