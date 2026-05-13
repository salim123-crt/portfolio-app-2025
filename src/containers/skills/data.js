import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode, faDatabase, faBrain, faLaptopCode, faLanguage, faTools, faServer } from "@fortawesome/free-solid-svg-icons";

export const SKILLS = [
  {
    title: "Web Development",
    icon: <FontAwesomeIcon icon={faLaptopCode} size="3x" />,
    skills: [
      { skill: "HTML", percentage: "80%" },
      { skill: "CSS", percentage: "65%" },
      { skill: "React", percentage: "70%" },
      { skill: "API Integration", percentage: "70%" },
    ],
  },
  {
    title: "Programming Languages",
    icon: <FontAwesomeIcon icon={faCode} size="3x" />,
    skills: [
      { skill: "Python", percentage: "90%" },
      { skill: "JavaScript", percentage: "70%" },
      { skill: "SQL", percentage: "75%" },
      { skill: "Java", percentage: "55%" },
      { skill: "C", percentage: "60%" },
    ],
  },
  {
    title: "Databases & Modeling",
    icon: <FontAwesomeIcon icon={faDatabase} size="3x" />,
    skills: [
      { skill: "MySQL", percentage: "80%" },
      { skill: "Data Modeling", percentage: "75%" },
      { skill: "UML", percentage: "80%" },
    ],
  },
  {
    title: "DevOps & MLOps",
    icon: <FontAwesomeIcon icon={faServer} size="3x" />,
    skills: [
      { skill: "Docker", percentage: "80%" },
      { skill: "FastAPI", percentage: "80%" },
      { skill: "Git & GitHub", percentage: "85%" },
      { skill: "CI/CD", percentage: "75%" },
      { skill: "Model Deployment", percentage: "75%" },
    ],
  },
  {
    title: "AI Libraries & Frameworks",
    icon: <FontAwesomeIcon icon={faBrain} size="3x" />,
    skills: [
      { skill: "Pandas", percentage: "75%" },
      { skill: "NumPy", percentage: "90%" },
      { skill: "Scikit-learn", percentage: "70%" },
      { skill: "OpenCV", percentage: "70%" },
      { skill: "TensorFlow", percentage: "60%" },
    ],
  },
  {
    title: "Languages",
    icon: <FontAwesomeIcon icon={faLanguage} size="3x" />,
    skills: [
      { skill: "French", percentage: "80%" },
      { skill: "English", percentage: "80%" },
      { skill: "Arabic", percentage: "100%" },
    ],
  },
  {
    title: "Tools",
    icon: <FontAwesomeIcon icon={faTools} size="3x" />,
    skills: [
      { skill: "Git", percentage: "80%" },
      { skill: "Excel", percentage: "70%" },
    ],
  },
];
