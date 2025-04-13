import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode, faDatabase, faBrain, faLaptopCode } from "@fortawesome/free-solid-svg-icons";

export const SKILLS = [
    {
        title: "Développement web",
        icon:<FontAwesomeIcon icon={faLaptopCode} size="3x"/>,
        skills:[
            {skill:"HTML", percentage:"80%"},
            {skill:"CSS", percentage:"50%"},
            {skill:"React", percentage:"65%"},
        ],
    },
    { 
        title: "Langage de Programmation",
        icon:<FontAwesomeIcon icon={faCode}  size="3x" />,
        skills:[
            {skill:"Java", percentage:"50%"},
            {skill:"Python", percentage:"70%"},
            {skill:"C", percentage:"70%"},
            {skill:"JacaScript", percentage:"60%"},
            {skill:"PHP", percentage:"80%"},
        ],
    },
    {
        title: "Bases de Données et Modélisation",
        icon:<FontAwesomeIcon icon={faDatabase}  size="3x"/>,
        skills:[
            {skill:"MySQL", percentage: "75%"},
            {skill:"UML", percentage: "80%"},
        ],
    },
    {
        title: "Bibliothèques et Frameworks d'IA",
        icon: <FontAwesomeIcon icon={faBrain} size="3x"/>,
        skills:[
            {skill:"Pandas", percentage:"60%"},
            {skill:"Numpy", percentage:"50%"},
            {skill:"Sckit-Learn", percentage:"50%"},
            {skill:"OpenCV", percentage:"65%"},
            {skill:"Tensorflow", percentage:"50%"},
            {skill:"Matplotlib", percentage:"75%"},
            {skill:"Keras", percentage:"50%"},
        ],
    },
];



