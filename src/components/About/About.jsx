import Download from "../Buttons/Download";
import CardInfo from "./CardInfo";
import PhotoAbout from "../../assets/about-4.webp";
import ExperienceEducation from "./ExperienceEducation";
import MyServices from "./MyServices";
import MyTestimonials from "./MyTestimonials";

function About() {
  const Cards = [
    { number: "+12", title: "years of experience" },
    { number: "+45", title: "completed projects" },
    { number: "+33", title: "Happy customers" },
    { number: "15", title: "awards won" },
  ];

  return (
    <div className="bg-slate-900 max-sd:overflow-scroll  pt-10">
      <div>
        <h1 className="uppercase sd:text-7xl text-5xl sm:text-center text-white px-5 pb-20">
          about <span className="text-blue-500 font-bold">me</span>
        </h1>
      </div>
      <div className="flex sd:justify-around max-sd:flex-col ">
        <div className="mb-10">
          <h2 className="sd:text-5xl text-2xl text-white uppercase px-5">
            personal infos
          </h2>
          <div className="rounded-full h-auto relative sm:hidden flex justify-center mb-5">
            <img
              src={PhotoAbout}
              className="object-cover max-sd:rounded-full shadow-lg rounded-lg h-[200px] w-[200px] "
            />
          </div>
          <div className="flex sd:text-lg text-base sm:justify-around max-sd:items-center">
            <ul className="list-Items w-1/2">
              <li className="">
                <span className="info-span opacity-[.8] text-white ">
                  Name:
                </span>
                john
              </li>
              <li>
                <span className="info-span opacity-[.8] text-white">Age:</span>
                28
              </li>
              <li>
                <span className="info-span opacity-[.8] text-white">
                  Freelance:
                </span>
                <span className="text-green-600"> Active </span>
              </li>
              <li>
                <span className="info-span opacity-[.8] text-white">
                  phone:
                </span>
                +123 456 789
              </li>
              <li>
                <span className="info-span opacity-[.8] text-white">
                  Skype:
                </span>
                john.milner
              </li>
            </ul>
            <ul className="list-Items">
              <li>
                <span className="info-span opacity-[.8] text-white">
                  last name:
                </span>
                Milner
              </li>
              <li>
                <span className="info-span opacity-[.8] text-white">
                  Nationality:
                </span>
                Tunisian
              </li>
              <li>
                <span className="info-span opacity-[.8] text-white">
                  Address:
                </span>
                Tunis
              </li>
              <li>
                <span className="info-span opacity-[.8] text-white">
                  Email:
                </span>
                you@mail.com
              </li>
              <li>
                <span className="info-span opacity-[.8] text-white">
                  langages:
                </span>
                French, English
              </li>
            </ul>
          </div>
          <div className="flex justify-center">
            <Download />
          </div>
        </div>
        <div className="grid grid-cols-2 gap-10">
          {Cards.map((card, index) => (
            <CardInfo key={index} number={card.number} title={card.title} />
          ))}
        </div>
      </div>
      <div className="sm:px-14">
        <ExperienceEducation />
      </div>
      <div className="sm:px-14">
        <MyServices />
      </div>
      <div>
        <MyTestimonials />
      </div>
    </div>
  );
}

export default About