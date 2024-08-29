import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";

const ExperienceEducation = () => {
  const data = [
    {
      yearRange: "2018 - PRESENT",
      title: "WEB DEVELOPER",
      company: "ENVATO",
      description:
        "Lorem ipsum dolor sit amet, consectetur tempor incididunt ut labore adipisicing elit",
    },
    {
      yearRange: "2013 - 2018",
      title: "UI/UX DESIGNER",
      company: "THEMEFOREST",
      description:
        "Lorem incididunt dolor sit amet, consectetur eiusmod dunt doldund dol elit, tempor incididunt",
    },
    {
      yearRange: "2005 - 2013",
      title: "CONSULTANT",
      company: "VIDEOHIVE",
      description:
        "Lorem ipsum dolor sit amet, tempor incididunt ut laboreconsectetur elit, sed do eiusmod tempor duntt",
    },
    {
      yearRange: "2015",
      title: "ENGINEERING DEGREE",
      company: "OXFORD UNIVERSITY",
      description:
        "Lorem ipsum dolor sit amet, consectetur tempor incididunt ut labore adipisicing elit",
    },
    {
      yearRange: "2012",
      title: "MASTER DEGREE",
      company: "KIEV UNIVERSITY",
      description:
        "Lorem incididunt dolor sit amet, consectetur eiusmod dunt doldund dol elit, tempor incididunt",
    },
    {
      yearRange: "2009",
      title: "BACHELOR DEGREE",
      company: "TUNIS HIGH SCHOOL",
      description:
        "Lorem ipsum dolor sit amet, tempor incididunt ut laboreconsectetur elit, sed do eiusmod tempor duntt",
    },
  ];

  return (
    <div className="bg-gray-900 text-white p-8">
      <h2 className="text-3xl font-bold text-center mb-8">
        EXPERIENCE & EDUCATION
      </h2>
      <div className="grid md:grid-cols-2 gap-8">
        {data.map((item, index) => (
          <div key={index} className="flex items-start space-x-4 relative pb-6">
            <div className="flex-shrink-0">
              <div className="bg-blue-500 rounded-full p-3">
                <FontAwesomeIcon icon={faBriefcase} className="text-white" />
              </div>
            </div>
            <div>
              <p className="text-sm text-gray-400 mb-1">{item.yearRange}</p>
              <h3 className="text-xl font-semibold">
                {item.title} <span className="text-blue-500">—</span>{" "}
                <span className="text-gray-400">{item.company}</span>
              </h3>
              <p className="text-gray-400">{item.description}</p>
            </div>
            {index < data.length - 1 && (
              <div className="absolute left-[18px] top-[50px] bottom-[-15px] w-[2px] bg-gray-600"></div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExperienceEducation;
