import postImageOne from '../assets/images/sagarProject.png'
import postImageTwo from '../assets/images/siddheshProject.png'
import postImageThree from '../assets/images/aynaanProject.png'
import postImageFour from '../assets/images/harshProject.png'
import postImageFive from '../assets/images/vishalProject.png'

import NinadPic from '../assets/images/sagarProfilePhoto.jpeg'
import SiddheshPic from '../assets/images/siddheshProfilePhoto.png'
import RahulPic from '../assets/images/aynaanProfilePhoto.jpeg'
import HarshPic from '../assets/images/harshProfilePhoto.jpg'
import VishalPic from '../assets/images/vishalProfilePhoto.jpg'

const PostData = [
  
  {
    name: "Sagar Pachare",
    domainDetails: {
        domainName: "Web development",
        color: "lightblue"
    },
    title: "I developed a Fun2Learn, Web-app designed for people who have trouble remembering the names of the country's states and union territories",
    img: postImageOne,
    avatar: NinadPic,
    clapCount: "32",
    commentCount: 54,
    isBookmarked : true
  },

  {
    name: "Siddhesh Mane",
    domainDetails: {
      domainName: "Web development",
      color: "lightblue"
  },
    title: "I developed a Crossword Generator which attempts to gamify the education sector by having a web-based crossword-puzzle-maker.",
    img: postImageTwo,
    avatar: SiddheshPic,
    clapCount: "45",
    commentCount: 67,
    isBookmarked : true
  },

  {
    name: "Aynaan Quareshi",
    domainDetails: {
      domainName: "Web development",
      color: "lightblue"
  },
    title: "I Developed a BookPublication, where you can publish your papers and books and also buy and preview others books and papers as well.",
    img: postImageThree,
    avatar: RahulPic,
    clapCount: "16",
    commentCount: 36,
    isBookmarked : false
  },

  {
    name: "Harsh Keniel",
    domainDetails: {
        domainName: "Machine Learning",
        color: "lightcoral"
    },
    title: "I built a ChatApp which enable users to connect and chat with their friends, colleagues, and anyone else on the server, irrespective of whether they are online or offline.",
    img: postImageFour,
    avatar: HarshPic,
    clapCount: "16",
    commentCount: 36,
    isBookmarked : false
  },

  {
    name: "Vishal Pandey",
    domainDetails: {
      domainName: "Web development",
      color: "lightblue"
    },
    title: "I built a ERP System for College Management system",
    img: postImageFive,
    avatar: VishalPic,
    clapCount: "16",
    commentCount: 36,
    isBookmarked : false
  },

];

export default PostData;