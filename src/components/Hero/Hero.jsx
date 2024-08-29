import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faFacebook,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import More from "../Buttons/More";
import PhotoAbout from '../../assets/about-4.webp'

function Hero() {
  const socailMedias = [
    { href: "#", icon: faInstagram },
    { href: "#", icon: faFacebook },
    { href: "#", icon: faTwitter },
    { href: "#", icon: faLinkedin },
  ];

  return (
    <div className="bg-slate-900 sd:h-dvh max-sd:overflow-scroll h-[100vh] text-white px-3 ">
      <div className="bg-blue-300 w-full inset-0 left-[-80%] absolute hidden sd:block" />
      <div className="flex flex-col sd:flex-row sd:justify-evenly h-full items-center pt-5">
        <div className=" max-w-[400px] max-sd:rounded-full h-auto relative ">
          <img
            src={PhotoAbout}
            className="w-full h-auto object-cover max-sd:rounded-full shadow-lg shadow-blue-400 rounded-lg max-sd:mb-8 max-sd:h-[270px] max-sd:w-[270px] "
          />
        </div>
        <div className="max-w-[660px] max-sd:w-full px-10">
          <div className="font-semibold text-center mb-7 uppercase">
            <p className="text-gray-500">Hi There, I&apos;m</p>
            <h1 className="text-7xl max-sm:text-5xl text-blue-600">
              Your Name.
            </h1>
            <h2 className="text-4xl max-sm:text-2xl">Photographer</h2>
          </div>
          <div className="mb-7">
            <ul className="flex justify-center p-2">
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
          <div className="max-sd:text-center">
            <p className="mb-5 ">
              I&apos;m a Tunisian based web designer & front‑end developer
              focused on crafting clean & user‑friendly experiences, I am
              passionate about building excellent software that improves the
              lives of those around me.
            </p>
            <div className="w-full flex justify-center">
              <More title={"More About Me"} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero