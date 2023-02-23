import SiddheshPic from '../assets/images/sagarProfilePhoto.jpeg'
import NinadPic from '../assets/images/aynaanProfilePhoto.jpeg'
import RahulPic from '../assets/images/vishalProfilePhoto.jpg'
// import HarshPic from '../assets/images/harshProfilePhoto.jpg'
// import VishalPic from '../assets/images/vishalProfilePhoto.jpg'

import projectLogo from "../assets/images/projectLogo.png"

const project = {
    name : "OmniTalk",
    tagline : "An Video Chat App that provides accessible interfaces for people with disabilities",
    icon : projectLogo,
    problemStatement : `
    People with disabilities ( Deaf, Blind, Paralysis ) often use non-verbal 
    modes of communication. Also they are unable to use conventional input devices like keyboard and mouse.
    This makes Video Conferencing Apps inaccessible and makes it impossible for them to communicate with their loved ones.
    `,
    idea : `
    We will add accessible interfaces onto a Video Chat app. Voice based meeting control can help people who
    cannot access mouse / keyboard. Computer Vision Models can be trained for automatic translation of non-verbal languages
    (Sign Language) to Readable Text.
    `,
    domain : ["Web Development"],
    techStack : ["ReactJS", "NodeJS", "OpenCV", "TensorFlow"],
    areas : ["For Social Good", "Video Chat", "Accessibility"],
    links : [
        {label : "Github", url : "https://github.com/vishalpandey/HighFive"},
        {label : "Presentation", url : "https://www.youtube.com/watch?v=1Q552Upe0Jo"},
        {label : "Hosted At", url : "https://aatma-nirbhar.herokuapp.com/"}
    ],
    teamName : "HighFive",
    teamMembers : [ 
        {
            firstname : "Sagar",
            lastname :  "Pachare",
            image: SiddheshPic,
        },
        {
            firstname: "Aynaan",
            lastname: "Quarishi",
            image: NinadPic,
        },
        {
            firstname: "Vishal",
            lastname : "Pandey",
            image: RahulPic,
        }
    ],
}

export default project